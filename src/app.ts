import { writeFileSync } from "fs";
import { components } from "../bungie-api/openapi.json";
import {
  generateComment,
  generateEnum,
  generateImport,
  generateInterface,
  getFullType,
} from "./functions";

const datas: any = {
  enum: {},
  interface: {},
};

const isEnum: string[] = [];
const isInterface: string[] = [];

const allValuesFromInterface: string[] = [];

(async () => {
  const schemas = components.schemas;
  for (var def in schemas) {
    // @ts-ignore
    const info = schemas[def];
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
      } else if (info?.items?.["x-enum-reference"]) {
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
          const fullTestValue = getFullType(value);
          const fullTestValueWithoutArray = getFullType(value).replace(
            "[]",
            ""
          );

          const isAdditional =
            value.type === "object" && value.additionalProperties;

          const isNullable = value?.nullable ? "| null" : "";

          const isAdditionalNested =
            isAdditional &&
            value.additionalProperties.type === "object" &&
            value.additionalProperties.additionalProperties;

          if (!allValuesFromInterface.includes(fullTestValueWithoutArray)) {
            allValuesFromInterface.push(fullTestValueWithoutArray);
          }

          const objectHead = (valueHead: any) => `Record<string, ${valueHead}>`;

          const prop = isAdditional
            ? isAdditionalNested
              ? `${name}: ${objectHead(
                  objectHead(`${fullTestValue}${isNullable}`)
                )};`
              : `${name}: ${objectHead(`${fullTestValue}${isNullable}`)};`
            : `${name}: ${`${fullTestValue}${isNullable}`};`;

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
