import { writeFileSync } from "fs";
import { paths } from "../bungie-api/openapi-2.json";
import {
  formatProps,
  generateComment,
  generateFunctionComment,
} from "./functions";

(async () => {
  var endpoints: Record<string, string[]> = {};

  for (let endpoint in paths) {
    // @ts-ignore
    const info = paths[endpoint];
    const correctMethod = info.get || info.post;
    const category =
      correctMethod.tags[0] === "" ? "Core" : correctMethod.tags[0];

    const functionName = correctMethod.operationId.split(".")[1];

    const comments = generateFunctionComment(
      correctMethod.description,
      correctMethod.parameters
    );
    const properties = formatProps(correctMethod.parameters);
    const stringTemplate = `${functionName}(${properties}) {
      const requestURL = ""
    }`;

    if (!endpoints[category]) endpoints[category] = [];
    endpoints[category].push(stringTemplate);
  }

  // console.log(endpoints);

  for (let index in endpoints) {
    const stringTemplate = `class ${index} {
      ${endpoints[index].join("\n\n")}
    }`;

    writeFileSync(`output/class/${index}.ts`, stringTemplate);
  }
})();
