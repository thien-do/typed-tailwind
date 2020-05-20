import camelcase from "camelcase";
import { Config } from "tailwindcss-won";

// "open" and "close" will be defined later to preserve whitespace
const base: { open: string, close: string } = { open: "", close: "" };

const twClass = "Tailwind";

base.open = `// http://github.com/dvkndn/typed-tailwind
export const Tw = new ${twClass}();

class ${twClass} {
  constructor(private readonly value: string = "") {}

  // Getter methods
  // Why "$":
  // - https://github.com/microsoft/TypeScript/issues/2361
  // - https://github.com/microsoft/TypeScript/issues/4538
  // - https://en.wikipedia.org/wiki/Regular_expression
  get $(): string { return this.value; }
  [Symbol.toPrimitive](): string { return this.value; }

  // Building methods
  private add(value: string): ${twClass} {
    const sep = this.value && " ";
    return new ${twClass}(this.value + sep + value);
  }

  // Styling methods
`;

base.close = "\n}\n";

const replaceNegative = (config: Config, key: string, value: string): string => {
  if (value.startsWith("-")) { return `neg-${key}`; }
  return key.replace(`${config.separator || ":"}-`, '-neg-');
};

// This works like toCamelCase, with a "minus" special case:
//   value            key
// - "text-primary":  "textPrimary"
// - "m-4":           "m4"
// - "-m-4":          "negM4"
// - "sm:-m-4":       "smNegM4"
const toKey = (config: Config, value: string): string => {
  let key = value;
  key = config.prefix ? key.replace(config.prefix, "") : key;
  key = key.split("/").join("-div-");
  key = replaceNegative(config, key, value);
  key = key.replace(/\W/g, '-'); // separator maybe
  key = camelcase(key);
  return key;
};

// input: text-red-4
// output: textRed4(): Style { return this.add("text-red-4"); }
const getMethod = (config: Config) => (cls: string): string => (
  `  get ${toKey(config, cls)}(): ${twClass} { return this.add("${cls}"); }`
);

export const getFile = (config: Config) => (classes: string[]): string => {
  const body = classes.map(getMethod(config)).join("\n");
  return `${base.open}${body}${base.close}`;
};
