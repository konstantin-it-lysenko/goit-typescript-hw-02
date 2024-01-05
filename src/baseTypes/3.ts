let some: unknown;
some = "Text";
let str: string;
// 1
if (typeof some === "string") str = some;
// 2
// str = some as string;
// 3
// str = <string>some;

export { str };
