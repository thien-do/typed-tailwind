import { Config } from "tailwindcss-won";

/**
 * Remove preflight option since it's not necessary AND tailwind uses "fs" to
 * handle it (which breaks on browsers)
 */
const removePreflight = (config: Config): Config => ({
  ...config,
  corePlugins: Array.isArray(config.corePlugins)
    ? config.corePlugins.filter(k => k !== "preflight")
    : { ...config.corePlugins, preflight: false }
});

/**
 * Returns a config object for Tailwind
 *
 * @param str - The config as string (input by users)
 * @returns The config object or error as string
 */
export const getConfig = (str: string): Config | string => {
  // config in tailwind.config.js starts with "module.exports"
  const configStr = str.slice(str.indexOf("{"), str.lastIndexOf("}") + 1);
  try {
    // eslint-disable-next-line no-new-func
    const configObj = Function(`"use strict";return (${configStr})`)();
    return removePreflight(configObj);
  } catch (error) {
    return `Cannot parse config: ${error}`;
  }
};
