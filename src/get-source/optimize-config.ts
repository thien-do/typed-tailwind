import { Config } from "tailwindcss";

/**
 * Remove preflight option since it's not necessary AND tailwind uses "fs" to
 * handle it (which breaks on browsers)
 */
const removePreflight = (config: Config): [Config, boolean] => {
  const cp = config.corePlugins;
  const [isPreflight, newCP] = Array.isArray(cp)
    ? [cp.includes("preflight"), cp.filter(k => k !== "preflight")]
    : [cp.preflight !== false, { ...cp, preflight: false }];
  return [{ ...config, corePlugins: newCP }, isPreflight];
};

/**
 * Replace separator to a better character (the default ":" is easily get
 * conflicted in CSS selectors)
 */
const replaceSeparator = (config: Config): [Config, string] => (
  [{ ...config, separator: "___" }, config.separator]
);

export interface Changes {
  separator: string;
  isPreflight: boolean;
}

/**
 * Returns a programming-friendly config
 *
 * @param config - The original config
 * @returns [new config, changes]
 */
export const optimizeConfig = (config: Config): [Config, Changes] => {
  const [config1, isPreflight] = removePreflight(config);
  const [config2, separator] = replaceSeparator(config1);
  return [config2, { isPreflight, separator }]
};
