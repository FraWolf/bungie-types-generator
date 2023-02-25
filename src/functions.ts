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

export function generateFunctionComment(
  description: string,
  parameters: any[]
) {
  return `
  /**
   * ${description}
   ${parameters
     .map((item) => `@param ${item.name} ${item.description}`)
     .join("\n")}
   */
  `;
}

export function formatProps(parameters: any[], oauth: boolean = false) {
  // if(oauth) parameters.push()

  const result: any[] = [];

  const requiredParameters = parameters
    .filter((item) => item.in === "path")
    .map((item) => {
      return `${item.name}${!item.required ? "?" : ""}: ${checkType(
        item.type,
        item.format
      )}`;
    })
    .join(",");

  const queryString = buildQueryString(
    parameters.filter((item) => item.in === "query")
  );

  if (requiredParameters !== "") result.push(requiredParameters);
  if (parameters.filter((item) => item.in === "query").length > 0)
    result.push(queryString);

  return result.join(",");
}

export function buildQueryString(parameters: any[]) {
  let required = false;
  const params = parameters.map((item) => {
    if (item.required && !required) required = true;

    return `${item.name}?: ${checkType(item.type, item.format)}`;
  });

  return `queryString${!required ? "?" : ""}: {
    ${params}
  }`;
}
