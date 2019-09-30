import { ChildNode } from "postcss";

/**
 * Returns list of selectors under a node.
 *
 * @param node - The node to start
 * @returns The selectors under node
 */
export const getSelectors = (node: ChildNode): string[] => {
  switch (node.type) {
    case "rule": return [node.selector];
    case "atrule":
      if (node.nodes === undefined) { return []; }
      return node.nodes.flatMap(getSelectors);
    default: return [];
  }
};
