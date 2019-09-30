declare module "tailwindcss" {
  export interface Config {
    separator: string
    corePlugins: Record<string, boolean> | string[]
  }

  const func: (config: Config) => import("postcss").AcceptedPlugin;
  export default func;
}
