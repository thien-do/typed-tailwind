import postcss from "postcss";
import tailwindcss from "tailwindcss";

import { getConfigObj } from "./get-config-obj";
import { getSelectors } from "./get-selectors";
import { getClasses } from "./get-classes";
import { optimizeConfig } from "./optimize-config";

const processResult = (
  resolve: (value: string) => void,
  reject: (reason: any) => void
) => (result: postcss.Result) => {
  if (result.root === undefined)
    return reject("Error: There is no root.");
  if (result.root.nodes === undefined)
    return reject("Error: There is no node at root.");
  const selectors = result.root.nodes.flatMap(getSelectors);
  const classes = getClasses(selectors);
  resolve(classes.join("\n"));
};

/**
 * Convert a config string to its TS source
 *
 * @param configStr - The tailwind config as a string
 * @returns A promise resolve to its TS source
 */
export const getSource = (configStr: string) => {
  return new Promise<string>((resolve, reject) => {
    const orgConfig = getConfigObj(configStr);
    if (typeof orgConfig === "string") { return reject(orgConfig); }
    const [optConfig, changes] = optimizeConfig(orgConfig);
    postcss([tailwindcss(optConfig)])
      .process("@tailwind utilities;", { from: undefined })
      .then(processResult(resolve, reject));
  });
}
