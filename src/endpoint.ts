import { writeFileSync } from "fs";
import fullJson, { paths } from "../bungie-api/openapi.json";
import {
  formatBody,
  formatProps,
  generateComment,
  generateFunctionComment,
  getSchemaFromResponse,
  replaceAll,
  resolveRef,
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

    const comments = generateFunctionComment(
      correctMethod.description,
      correctMethod.parameters
    );

    const isOauth =
      correctMethod.security &&
      correctMethod.security.length > 0 &&
      correctMethod.security.filter((item: any) => item["oauth2"]);

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
              fullRef: null,
            }
        : { isRef: false, type: null, fullRef: null };

    let bodyArray: any[] = [];
    if (bodyType.isRef && bodyType.fullRef) {
      bodyArray = formatBody(
        // @ts-ignore
        fullJson.components.schemas[bodyType.fullRef].properties
      );
    }

    const formattedProps = [...correctMethod.parameters, ...bodyArray];

    // console.log(formattedProps);

    const properties = formatProps(formattedProps, isOauth);
    const stringTemplate = replaceAll(
      `${comments}${functionName}(${properties}): Promise<APIResponse<${responseInterface}>> {
      var requestURL = \`§{this.url}${replaceAll(endpoint, "{", "${")}\`
      ${
        isOauth
          ? "const authHeaders = parseAuthenticationHeaders(this.headers, tokens);"
          : ""
      }
      ${
        method === "POST"
          ? `const bodyParams: ${bodyType.type} = {
       
      };`
          : ""
      }
      return request(requestURL, true, "${method}", ${
        isOauth ? "authHeaders" : "this.headers"
      }${method === "POST" ? ", JSON.stringify(bodyParams)" : ""});
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

    writeFileSync(`output/class/${index}.ts`, stringTemplate);
  }
})();
