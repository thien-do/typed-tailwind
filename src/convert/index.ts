import postcss from "postcss";
import tailwind from "tailwindcss";

import { toClasses } from "./to-classes";

const css = "@tailwind utilities;\n";

const toSelector = (node: postcss.ChildNode): string[] => {
  switch (node.type) {
    case "rule": return [node.selector];
    case "atrule":
      if (node.nodes === undefined) { return []; }
      return node.nodes.flatMap(toSelector);
    default: throw Error(`Unsupported node type: ${node.type}.`)
  }
};

export const convert = (config: any) => {
  postcss([tailwind(config)])
    .process(css, { from: undefined })
    .then((result: postcss.Result) => {
      const root = result.root;
      if (root === undefined) { throw Error("Root is undefined ???"); }
      const nodes = root.nodes;
      if (nodes === undefined) { throw Error("Root.nodes is undefined ???"); }
      const selectors = nodes.flatMap(toSelector);
      const classes = toClasses(selectors);
      console.log(classes.length);
    });
}
