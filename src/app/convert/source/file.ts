import camelcase from "camelcase";
import { Config } from "tailwindcss";

// "open" and "close" will be defined later to preserve whitespace
const base: { open: string, close: string } = { open: "", close: "" };

base.open = `// http://github.com/dvkndn/typed-tailwind
export const Style = (): SStyle => new SStyle();

class SStyle {
  value = "";

  // Getter methods
  // Why "$":
  // - https://github.com/microsoft/TypeScript/issues/2361
  // - https://github.com/microsoft/TypeScript/issues/4538
  // - https://en.wikipedia.org/wiki/Regular_expression
  $(): string { return this.value; }
  [Symbol.toPrimitive](): string { return this.$(); }

  // Building methods
  private add(value: string): SStyle {
    this.value = \`\${this.value} \${value}\`;
    return this;
  }

  // Styling methods
`;

base.close = "\n}\n";

// This works like toCamelCase, with a "minus" special case:
//   value            key
// - "text-primary":  "textPrimary"
// - "m-4":           "m4"
// - "-m-4":          "nM4"
const toKey = (config: Config, value: string): string => {
  let key = value;
  key = config.prefix ? key.replace(config.prefix, "") : key;
  key = key.split("/").join("-div-");
  key = value.startsWith("-") ? `n-${key}` : key;
  key = key.replace(/\W/g,'-'); // separator maybe
  key = camelcase(key);
  return key;
};

// input: text-red-4
// output: textRed4(): Style { return this.add("text-red-4"); }
const getMethod = (config: Config) => (cls: string): string => (
  `  ${toKey(config, cls)}(): SStyle { return this.add("${cls}"); }`
);

export const getFile = (config: Config) => (classes: string[]): string => {
  const body = classes.map(getMethod(config)).join("\n");
  return `${base.open}${body}${base.close}`;
};