import { Config } from "tailwindcss";

/**
 * Returns a config object for Tailwind
 *
 * @param str - The config as string (input by users)
 * @returns The config object or error as string
 */
export const getConfigObj = (str: string): Config | string => {
  // config in tailwind.config.js starts with "module.exports"
  const config = str.slice(str.indexOf("{"), str.lastIndexOf("}") + 1);
  try {
    // eslint-disable-next-line no-new-func
    return Function(`"use strict";return (${config})`)();
  } catch (error) {
    return `Cannot parse config: ${error}`;
  }
};
