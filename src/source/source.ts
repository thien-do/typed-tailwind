import postcss from "postcss";
import tailwindcss from "tailwindcss";

import { getConfig } from "./config";
import { getSelectors } from "./selectors";
import { getClasses } from "./classes";
import { withSafeSeparator, restoreSeparator } from "./separator";

/**
 * Convert a config file to its TS source
 *
 * @param configStr - content of a tailwind.config.js
 * @returns TypeScript source to the classes
 */
export const getSource = (configStr: string) => {
  return new Promise<string>((resolve, reject) => {
    const config = getConfig(configStr);
    if (typeof config === "string") { return reject(config); }
    postcss([
      tailwindcss(withSafeSeparator(config))
    ])
      .process("@tailwind utilities;", { from: undefined })
      .then(getSelectors)
      .then(getClasses)
      .then(restoreSeparator(config))
      .catch(reject);
  });
}
