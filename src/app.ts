import { writeFileSync } from "fs";
import { definitions } from "../bungie-api/openapi-2.json";

const datas: any = {
  enum: {},
  interface: {},
};

(async () => {
  for (var def in definitions) {
    // @ts-ignore
    const info = definitions[def];
    const titleArrays = def.split(".");

    const category = titleArrays[0].toLowerCase();
    let title = titleArrays[titleArrays.length - 1];
    title = title.replace("[]", "");

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
            };
          } else {
            return item;
          }
        });
      } else if (info.items["x-enum-reference"]) {
        let ref = info.items["x-enum-reference"].$ref.split("/");
        ref = ref[ref.length - 1].split(".");
        ref = ref[ref.length - 1];

        // Nothing to do here :)
      }

      const genEnum = generateEnum(title, props);
      datas["enum"][category].push(genEnum);
    } else {
      const entries: string[] = [];
      const props = info.properties || info.additionalProperties;

      if (props) {
        const newEntries = Object.entries(props).map(([name, value]: any) => {
          const refs =
            value?.$ref ||
            value?.additionalProperties?.$ref ||
            value?.items?.$ref ||
            value?.["x-enum-reference"]?.$ref ||
            value?.items?.["x-enum-reference"]?.$ref ||
            value?.allOf?.[0]?.$ref;

          const checkIfRef = !!refs;
          const ref = checkIfRef && resolveRef(refs);

          let valueToReturn = checkIfRef
            ? ref
            : value.type === "array"
            ? value.items.type
            : value.type;

          const array = value.type === "array" ? "[]" : "";

          return `${name}: ${checkType(valueToReturn)}${array};`;
        });

        entries.push(...newEntries);
      }

      const genInterface = generateInterface(title, entries);
      datas["interface"][category].push(genInterface);
    }
  }

  const writeEnum = Object.values(datas["enum"])
    .flatMap((item) => item)
    .join("\n\n");
  writeFileSync(`output/enum.d.ts`, writeEnum);

  const writeInterface = Object.values(datas["interface"])
    .flatMap((item) => item)
    .join("\n\n");
  writeFileSync(`output/interface.d.ts`, writeInterface);
})();

export function checkType(name: string) {
  return name === "integer" ? "number" : name;
}

export function resolveRef(ref: string) {
  let refToSend = ref.replace("#/", "").split("/");
  refToSend = refToSend[refToSend.length - 1].split(".");
  return refToSend[refToSend.length - 1];
}

export function generateInterface(title: string, props: string[]) {
  return `export interface ${title} {
    ${props.join("\n")}
  }`;
}

export function generateEnum(
  title: string,
  props: { name: string; value: any }[]
) {
  return `export const enum ${title} { ${props
    .map((item) => `${item.name} = ${item.value},`)
    .join("\n")} };`;
}
