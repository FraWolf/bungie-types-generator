import { getFullType, replaceAll, replaceArrayAll } from "./functions";

export class TypingsCollector {
  private defaultTypings: string[] = ["string", "boolean", "number"];
  private replaces: string[] = ["[]", "Record<", ">"];
  private typings = new Set<string>();
  constructor() {}

  public getFullType(value: any) {
    const fullType = getFullType(value);
    this.collect(fullType);
    return fullType;
  }

  public collect(typing: string) {
    this.typings.add(typing);
  }

  public apply() {
    return Array.from(this.typings)
      ?.flatMap((typing) => {
        const newTyping = replaceArrayAll(
          typing,
          this.replaces?.map((replace) => {
            return { find: replace, replace: "" };
          })
        );

        console.log(`> new: ${newTyping}`);

        return newTyping?.split(",")?.map((item) => {
          return item.trim();
        });
      })
      ?.filter((typing) => {
        return !this.defaultTypings.includes(typing);
      })
      ?.map((item) => {
        console.log(item);
        return item;
      });
  }
}
