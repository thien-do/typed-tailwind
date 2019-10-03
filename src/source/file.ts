import camelcase from "camelcase";

// "open" and "close" will be defined later to preserve whitespace
const base: { open: string, close: string } = { open: "", close: "" };

base.open = `class Style {
  value = "";

  // Getter methods
  // Why "$":
  // - https://github.com/microsoft/TypeScript/issues/2361
  // - https://github.com/microsoft/TypeScript/issues/4538
  // - https://en.wikipedia.org/wiki/Regular_expression
  $(): string { return this.value; }
  [Symbol.toPrimitive](): string { return this.$(); }

  // Building methods
  private add(value: string): Style {
    this.value = \`\${this.value} \${value}\`;
    return this;
  }

  // Styling methods
  // e.g. textRed4(): Style { return this.add("text-red-4"); }
`;

base.close = "\n}\n";

// This works like toCamelCase, with a "minus" special case:
//   value            key
// - "text-primary":  "textPrimary"
// - "m-4":           "m4"
// - "-m-4":          "nM4"
const toKey = (value: string): string => {
  let key = value;
  key = key.split("/").join("-div-");
  key = value.startsWith("-") ? `n-${key}` : key;
  key = camelcase(key);
  return key;
};

// input: text-red-4
// output: textRed4(): Style { return this.add("text-red-4"); }
const getMethod = (cls: string): string => (
  `  ${toKey(cls)}(): Style { return this.add("${cls}"); }`
)

export const getFile = (classes: string[]): string => {
  const body = classes.map(getMethod).join("\n");
  return `${base.open}${body}${base.close}`;
};
