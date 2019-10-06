import { Config } from "tailwindcss-won";

// Because some separator (including the default ":") is not code-friendly
// and may be conflicted with CSS syntax
const safeSeparator = "___";

/**
 * Replace the separator of a config with a safe one
 *
 * @param config - A config whose separator to be replaced
 * @returns A new config whose separator is replaced
 */
export const withSafeSeparator = (config: Config): Config =>
  ({ ...config, separator: safeSeparator })

/**
 * Restore the separators in classes to the original one
 *
 * @param orgConfig - A config that has the original separator
 * @returns A function to restore the separators in a list of classes
 */
export const restoreSeparator = (orgConfig: Config) => (classes: string[]) => {
  const orgSeparator = orgConfig.separator || ":";
  const cb = (cls: string) => cls.split(safeSeparator).join(orgSeparator);
  return classes.map(cb);
};
