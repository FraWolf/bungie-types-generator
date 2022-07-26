import { writeFileSync } from "fs";
import openapi, { definitions } from "../bungie-api/openapi-2.json";

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
    const isArray = title.endsWith("[]");
    title = title.replace("[]", "");

    // title = title.endsWith("s") ? title.slice(0, -1) : title;

    // console.log("Category =", category);
    // console.log("Title =", title);

    if (true) {
      // console.log(category, "-", title);

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

          // console.log(title);
          // console.log(ref);

          // Resolve ref
        }

        const genEnum = generateEnum(title, props);
        datas["enum"][category].push(genEnum);
      } else {
        var entries;

        if (title === "DestinyProgression") {
          console.log(info.properties["rewardItemStates"]);
        }

        if (info.properties) {
          entries = (Object.entries(info.properties) || []).map(
            ([name, value]: any) => {
              // Add ref inside "allOf"
              // Add array parenteses
              // Checks for undefined

              const checkIfRef = !!(
                value?.$ref ||
                value?.items?.$ref ||
                value?.["x-enum-reference"]?.$ref ||
                value?.items?.["x-enum-reference"]?.$ref ||
                (value.allOf && value.allOf.length > 0 && value.allOf[0].$ref)
              );

              const ref =
                checkIfRef &&
                resolveRef(
                  value?.$ref ||
                    value?.items?.$ref ||
                    value?.["x-enum-reference"]?.$ref ||
                    value?.items?.["x-enum-reference"]?.$ref ||
                    value.allOf[0].$ref
                );

              let valueToReturn = checkIfRef
                ? ref
                : value.type === "array"
                ? toNumber(value.items.type)
                : toNumber(value.type);

              // console.log("Name =", name);
              // console.log("Value =", value);

              const array = value.type === "array" ? "[]" : "";

              return `${name}: ${valueToReturn}${array};`;
            }
          );

          // console.log(entries);

          const genInterface = generateInterface(title, entries);
          datas["interface"][category].push(genInterface);
        }
      }
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

export function toNumber(name: string) {
  return name === "integer" ? "number" : name;
}

export function resolveRef(ref: string) {
  // #/definitions/Destiny.Milestones.DestinyPublicMilestone

  let refToSend = ref.replace("#/", "").split("/");
  refToSend = refToSend[refToSend.length - 1].split(".");
  return refToSend[refToSend.length - 1];
}

export function generateInterface(
  title: string,
  props: string[],
  isArray: boolean = false
) {
  return `export interface ${title} {
    ${props.join("\n")}
  }`;
}

export function generateType(
  title: string,
  props: { name: string; value: any }[]
) {
  return `export type ${title} = string[]`;
}

export function generateEnum(
  title: string,
  props: { name: string; value: any }[]
) {
  return `export const enum ${title} { ${props
    .map((item) => `${item.name} = ${item.value},`)
    .join("\n")} };`;
}
