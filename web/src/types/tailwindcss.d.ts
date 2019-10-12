declare module "tailwindcss-won" {
  export interface Config {
    prefix?: string;
    separator?: string;
    corePlugins: Record<string, boolean> | string[];
  }

  const func: (config: Config) => import("postcss").AcceptedPlugin;
  export default func;
}
