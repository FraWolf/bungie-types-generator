import { existsSync, mkdirSync, writeFileSync } from "fs";
import fullJson, { paths } from "../bungie-api/openapi.json";
import {
  formatBody,
  formatBodyProps,
  formatProps,
  generateComment,
  generateFunctionComment,
  getFullType,
  getSchemaFromResponse,
  replaceAll,
  resolveRef,
  searchRef,
} from "./functions";

(async () => {
  var endpoints: Record<string, string[]> = {};

  for (let endpoint in paths) {
    // @ts-ignore
    const info = paths[endpoint];
    const method = info.get ? "GET" : "POST";
    const correctMethod = info[method.toLowerCase()];
    const category =
      correctMethod.tags[0] === "" ? "Core" : correctMethod.tags[0];

    const functionName = correctMethod.operationId.split(".")[1];
    const responseInterface = getSchemaFromResponse(
      correctMethod.responses["200"]["$ref"],
      fullJson
    );

    // console.log(responseInterface);

    // if (
    //   responseInterface === "IReadOnlyCollectionOfContentItemPublicContract"
    // ) {
    //   console.log(correctMethod.responses["200"]["$ref"]);
    // }

    //     const isAdditional =
    //     value.type === "object" && value.additionalProperties;

    //   const isNullable = value?.nullable ? "| null" : "";

    //   const isAdditionalNested =
    //     isAdditional &&
    //     value.additionalProperties.type === "object" &&
    //     value.additionalProperties.additionalProperties;

    //   if (!allValuesFromInterface.includes(fullTestValueWithoutArray)) {
    //     allValuesFromInterface.push(fullTestValueWithoutArray);
    //   }

    //   const objectHead = (valueHead: any) => `Record<string, ${valueHead}>`;

    //   const prop = isAdditional
    //     ? isAdditionalNested
    //       ? `${name}: ${objectHead(
    //           objectHead(`${fullTestValue}${isNullable}`)
    //         )};`
    //       : `${name}: ${objectHead(`${fullTestValue}${isNullable}`)};`
    //     : `${name}: ${`${fullTestValue}${isNullable}`};`;

    //   return value?.description
    //     ? `${generateComment(value?.description)}\n${prop}`
    //     : prop;
    // });

    const endpointParameters = correctMethod.parameters || [];

    const comments = generateFunctionComment(
      correctMethod.description,
      endpointParameters
    );

    const isOauth =
      correctMethod.security &&
      correctMethod.security.length > 0 &&
      correctMethod.security.filter((item: any) => item["oauth2"]);

    // console.log(
    //   endpoint === "/Forum/Recruit/Summaries/" &&
    //     method === "POST" &&
    //     correctMethod.requestBody
    //     ? correctMethod.requestBody.content["application/json"].schema
    //     : "no"
    // );

    const bodyType =
      method === "POST" && correctMethod.requestBody
        ? correctMethod.requestBody.content["application/json"].schema.$ref
          ? {
              isRef: true,
              type: getSchemaFromResponse(
                correctMethod.requestBody.content["application/json"].schema
                  .$ref,
                fullJson
              ),
              schema:
                correctMethod.requestBody.content["application/json"].schema,
              fullRef: resolveRef(
                correctMethod.requestBody.content["application/json"].schema
                  .$ref,
                false
              ),
            }
          : {
              isRef: false,
              type: correctMethod.requestBody.content["application/json"].schema
                .items.type,
              schema:
                correctMethod.requestBody.content["application/json"].schema,
              fullRef: null,
            }
        : { isRef: false, type: null, schema: null, fullRef: null };

    let bodyArray: any[] = [];
    if (bodyType.isRef && bodyType.fullRef) {
      bodyArray = formatBody(
        // @ts-ignore
        fullJson.components.schemas[bodyType.fullRef].properties
      );

      // console.log(bodyArray);
    }

    // if (endpoint === "/Forum/Recruit/Summaries/") console.log(bodyType);
    // if (bodyType?.schema === null && method === "POST")
    //   console.log(endpoint, bodyType);
    // if (method === "POST" && bodyType.isRef) {
    // console.log(endpoint, bodyType);
    // }

    const formattedProps = [...endpointParameters, ...bodyArray];

    const properties = formatProps(formattedProps, isOauth);
    const includesQueryString = properties.includes("queryString:");
    const stringTemplate = replaceAll(
      `${comments}public ${functionName}(${properties}): Promise<APIResponse<${responseInterface}>> {
      var requestURL = ${
        includesQueryString ? "formatQueryStrings(" : ""
      }\`§{this.url}${replaceAll(endpoint, "{", "${")}\`${
        includesQueryString ? ", queryString);" : ""
      }
      ${
        isOauth
          ? "const authHeaders = parseAuthenticationHeaders(this.headers, tokens);"
          : ""
      }
      ${
        method === "POST" && correctMethod.requestBody
          ? `const bodyParams: ${getFullType(bodyType?.schema)} = ${
              bodyType?.schema?.type === "array"
                ? `[${formatBodyProps(bodyArray)}]`
                : `{${formatBodyProps(bodyArray)}}`
            }`
          : ""
      }
      return request(requestURL, true, "${method}", ${
        isOauth ? "authHeaders" : "this.headers"
      }${
        method === "POST" && correctMethod.requestBody
          ? ", JSON.stringify(bodyParams)"
          : ""
      });
    }`,
      "§",
      "$"
    );

    if (!endpoints[category]) endpoints[category] = [];
    endpoints[category].push(stringTemplate);
  }

  // console.log(endpoints);

  for (let index in endpoints) {
    const stringTemplate = `export class ${index} {
      constructor(
        private url: string,
        private headers: Record<string, string>
      ) {}
      ${endpoints[index].join("\n\n")}
    }`;

    const folderName = index.toLowerCase();

    if (!existsSync(`output/class/${folderName}`))
      mkdirSync(`output/class/${folderName}`);
    writeFileSync(`output/class/${folderName}/index.ts`, stringTemplate);
  }
})();
