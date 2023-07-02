export function generateImport(imports: string[], from: string) {
  return `import {
    ${imports.join(",\n")}
  } from "${from}";`;
}

export function getTypeAndFormat(value: any) {
  let [type, format] =
    value.type === "array"
      ? [value.items.type, value.items.format]
      : value.type === "object" && value.additionalProperties
      ? value.additionalProperties.type === "object" &&
        value.additionalProperties.additionalProperties
        ? [
            value.additionalProperties.additionalProperties.type,
            value.additionalProperties.additionalProperties.format,
          ]
        : [value.additionalProperties.type, value.additionalProperties.format]
      : [value.type, value.format];

  return [type, format];
}

export function getFullType(value: any) {
  const refs = searchRef(value);

  const checkIfRef = !!refs;
  const ref = checkIfRef && resolveRef(refs);

  // console.log(value);
  let [type, format] = checkIfRef ? [ref, null] : getTypeAndFormat(value);

  const valueToReturn =
    format && type === "integer"
      ? format == "int64"
        ? "string"
        : "number"
      : type;

  const array =
    (value?.additionalProperties?.type || value.type) === "array" ? "[]" : "";

  return `${valueToReturn}${array}`;
}

export function resolveRef(ref: string, lastPartOnly: boolean = true) {
  let refToSend = ref.replace("#/", "").split("/");
  let newRef = refToSend[refToSend.length - 1];

  if (lastPartOnly) {
    let splittedRef = newRef.split(".");
    newRef = splittedRef[splittedRef.length - 1];
  }

  return newRef;
}

export function getSchemaFromResponse(fullRef: string, fullJson: any) {
  if (fullRef.includes("responses")) {
    const refPath =
      fullJson.components.responses[resolveRef(fullRef, false)].content[
        "application/json"
      ].schema.properties.Response;

    if (refPath.type === "object" && refPath["x-dictionary-key"]) {
      const key = refPath["x-dictionary-key"]["x-enum-reference"]
        ? resolveRef(refPath["x-dictionary-key"]["x-enum-reference"].$ref)
        : refPath["x-dictionary-key"].format && refPath["x-dictionary-key"].type
        ? refPath["x-dictionary-key"].format &&
          refPath["x-dictionary-key"].type === "integer"
          ? refPath["x-dictionary-key"].format == "int64"
            ? "string"
            : "number"
          : refPath["x-dictionary-key"].type
        : refPath["x-dictionary-key"].type;

      const value = refPath.additionalProperties.$ref
        ? resolveRef(refPath.additionalProperties.$ref)
        : refPath.additionalProperties.type;

      return `Record<${key}, ${value}>`;
    }

    if (
      Object.entries(refPath).length === 1 &&
      refPath.type &&
      refPath.type === "object"
    ) {
      return "object";
    }

    fullRef = searchRef(refPath) || resolveRef(fullRef);
  }

  fullRef = fullRef.startsWith("int")
    ? fullRef === "int64"
      ? "string"
      : "number"
    : fullRef;

  return fullRef.includes("#/") ? resolveRef(fullRef) : fullRef;
}

export function searchRef(value: any) {
  return (
    value?.$ref ||
    value?.additionalProperties?.$ref ||
    value?.additionalProperties?.items?.$ref ||
    value?.items?.$ref ||
    value?.["x-enum-reference"]?.$ref ||
    value?.items?.["x-enum-reference"]?.$ref ||
    value?.allOf?.[0]?.$ref
  );
}

export function getBodyParams(requestBody: any) {
  const body = requestBody.content["application/json"].schema;
  const checkIfRef = !!body.$ref;

  if (checkIfRef) {
    // console.log(body.$ref);
  }

  // TODO: Handle body params that are not ref
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

export function generateFunctionComment(
  description: string,
  parameters: any[]
) {
  return `
  /**
   * ${description}
   ${parameters
     .map((item) => `* @param ${item.name} ${item.description}`)
     .join("\n")}
    * @returns ${description}
   */
  `;
}

export function formatBody(parameters: any) {
  let final: any[] = [];

  for (let paramName in parameters) {
    const parameter = parameters[paramName];

    final.push({
      name: paramName,
      in: "body",
      description: parameter.description,
      required: !parameter.nullable,
      schema: parameter,
    });
  }

  return final;
}

export function formatProps(parameters: any[], oauth: boolean = false) {
  const result: any[] = [];

  const requiredParameters = parameters
    .filter((item) => item.in === "path")
    .map((item) => {
      return `${item.name}: ${getFullType(item.schema)}${
        !item.required ? "| null" : ""
      }`;
    })
    .join(",");

  const bodyParameters = parameters
    .filter((item) => item.in === "body")
    .map((item) => {
      return `${item.name}: ${getFullType(item.schema)}${
        !item.required ? "| null" : ""
      }`;
    })
    .join(",");

  const queryString = buildQueryString(
    parameters.filter((item) => item.in === "query")
  );

  if (requiredParameters !== "") result.push(requiredParameters);
  if (bodyParameters !== "") result.push(bodyParameters);
  if (parameters.filter((item) => item.in === "query").length > 0)
    result.push(queryString);
  if (oauth) result.push("tokens: ITokens");

  return result.join(",");
}

export function formatBodyProps(parameters: any[]) {
  const bodyParameters = parameters
    .filter((item) => item.in === "body")
    .map((item) => {
      return `${item.name}`;
    });

  return bodyParameters.join(",");
}

export function buildQueryString(parameters: any[]) {
  let required = false;
  const params = parameters.map((item) => {
    if (item.required && !required) required = true;

    return `${item.name}?: ${getFullType(item.schema)}`;
  });

  return `queryString: {
    ${params}
  }${!required ? "| null" : ""}`;
}

export function replaceAll(text: string, find: string, replace: string) {
  return text.replace(new RegExp(find, "g"), replace);
}

export function replaceArrayAll(
  text: string,
  data: { find: string; replace: string }[]
) {
  let firstData = text;

  data.forEach(({ find, replace }) => {
    firstData = text.replace(new RegExp(find, "g"), replace);
  });

  return firstData;
}

export function checkForRef() {}
