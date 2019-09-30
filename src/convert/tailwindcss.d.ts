declare module "tailwindcss" {
  const func: (config: Object) => import("postcss").AcceptedPlugin;
  export default func;
}
