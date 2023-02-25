import { writeFileSync } from "fs";
import { definitions } from "../bungie-api/openapi-2.json";

const datas: any = {
  enum: {},
  interface: {},
};

const isEnum: string[] = [];
const isInterface: string[] = [];

const allValuesFromInterface: string[] = [];

(async () => {
  for (var def in definitions) {
    // @ts-ignore
    const info = definitions[def];
    const titleArrays = def.split(".");

    const category = titleArrays[0].toLowerCase();
    let title = titleArrays[titleArrays.length - 1];
    title = title.replace("[]", "");
    let description = info.description;

    if (!datas["enum"][category]) datas["enum"][category] = [];
    if (!datas["interface"][category]) datas["interface"][category] = [];

    if (info.type !== "object") {
      var props;

      if (info["x-enum-values"]) {
        props = info["x-enum-values"].map((item: any) => {
          if (typeof item === "object") {
            return {
              name: item.identifier,
              value: item.numericValue,
              comment: item.description,
            };
          } else {
            return item;
          }
        });
      } else if (info.items["x-enum-reference"]) {
        let ref = info.items["x-enum-reference"].$ref.split("/");
        ref = ref[ref.length - 1].split(".");
        ref = ref[ref.length - 1];
        props = null;

        // Nothing to do here :)
      }

      if (!props) continue;

      const genEnum = generateEnum(title, props, false, description);
      datas["enum"][category].push(genEnum);
      isEnum.push(title);
    } else {
      const entries: string[] = [];
      const props = info.properties || info.additionalProperties;

      if (props) {
        const newEntries = Object.entries(props).map(([name, value]: any) => {
          const refs =
            value?.$ref ||
            value?.additionalProperties?.$ref ||
            value?.additionalProperties?.items?.$ref ||
            value?.items?.$ref ||
            value?.["x-enum-reference"]?.$ref ||
            value?.items?.["x-enum-reference"]?.$ref ||
            value?.allOf?.[0]?.$ref;

          const checkIfRef = !!refs;
          const ref = checkIfRef && resolveRef(refs);

          let [type, format] = checkIfRef
            ? [ref, null]
            : value.type === "array"
            ? [value.items.type, value.items.format]
            : value.type === "object" && value.additionalProperties
            ? value.additionalProperties.type === "object" &&
              value.additionalProperties.additionalProperties
              ? [
                  value.additionalProperties.additionalProperties.type,
                  value.additionalProperties.additionalProperties.format,
                ]
              : [
                  value.additionalProperties.type,
                  value.additionalProperties.format,
                ]
            : [value.type, value.format];

          const valueToReturn = checkType(type, format);
          const array =
            (value?.additionalProperties?.type || value.type) === "array"
              ? "[]"
              : "";

          const isAdditional =
            value.type === "object" && value.additionalProperties;

          const isAdditionalNested =
            isAdditional &&
            value.additionalProperties.type === "object" &&
            value.additionalProperties.additionalProperties;

          if (!allValuesFromInterface.includes(valueToReturn)) {
            allValuesFromInterface.push(valueToReturn);
          }

          const objectHead = (valueHead: any) =>
            `Record<string, ${valueHead}${array}>`;

          const prop = isAdditional
            ? isAdditionalNested
              ? `${name}: ${objectHead(objectHead(valueToReturn))};`
              : `${name}: ${objectHead(valueToReturn)};`
            : `${name}: ${valueToReturn}${array};`;

          return value?.description
            ? `${generateComment(value?.description)}\n${prop}`
            : prop;
        });

        entries.push(...newEntries);
      }

      const genInterface = generateInterface(title, entries, description);
      datas["interface"][category].push(genInterface);
      isInterface.push(title);
    }
  }

  const writeEnum = Object.values(datas["enum"])
    .flatMap((item) => item)
    .join("\n\n");
  writeFileSync(`output/enum.ts`, writeEnum);

  const writeInterfaceImport = generateImport(
    allValuesFromInterface.filter((type) => isEnum.includes(type)),
    "./enum"
  );
  const writeInterface = Object.values(datas["interface"])
    .flatMap((item) => item)
    .join("\n\n");

  const interfaces = [writeInterfaceImport, writeInterface].join("\n\n");

  writeFileSync(`output/interface.ts`, interfaces);
})();

export function generateImport(imports: string[], from: string) {
  return `import {
    ${imports.join(",\n")}
  } from "${from}";`;
}

export function checkType(type: string, format: string) {
  return format && type === "integer"
    ? format == "int64"
      ? "string"
      : "number"
    : type;
}

export function resolveRef(ref: string) {
  let refToSend = ref.replace("#/", "").split("/");
  refToSend = refToSend[refToSend.length - 1].split(".");
  return refToSend[refToSend.length - 1];
}

export function generateInterface(
  title: string,
  props: string[],
  comment?: string
) {
  const stringInterface = `export interface ${title} {
    ${props.join("\n")}
  }`;

  return comment
    ? `${generateComment(comment)}\n${stringInterface}`
    : stringInterface;
}

export function generateEnum(
  title: string,
  props: { name: string; value: any; comment?: string }[],
  isConst: boolean = false,
  comment?: string
) {
  const stringEnum = `export ${isConst ? "const" : ""} enum ${title} {
    ${props
      .map((item) => {
        return item?.comment
          ? `${generateComment(item.comment)}\n${item.name} = ${item.value},`
          : `${item.name} = ${item.value},`;
      })
      .join("\n")}
    };`;

  return comment ? `${generateComment(comment)}\n${stringEnum}` : stringEnum;
}

export function generateComment(lines: string) {
  const linesArray = lines.split("\r\n");
  return linesArray.map((line) => `// ${line.trim()}`).join("\n");
}
