import { ChildNode, Result } from "postcss";

const getSelectorsFromNode = (node: ChildNode): string[] => {
  switch (node.type) {
    case "rule": return [node.selector];
    case "atrule":
      if (node.nodes === undefined) { return []; }
      return node.nodes.flatMap(getSelectorsFromNode);
    default: return [];
  }
};

/**
 * Returns list of selectors from postcss's result
 *
 * @param result - The result of postcss's process
 * @returns The selectors under that result.root.nodes
 */
export const getSelectors = ({ root }: Result): string[] => {
  if (root === undefined) throw new Error("There is no root.");
  if (root.nodes === undefined) throw new Error("There is no node at root.");
  return root.nodes.flatMap(getSelectorsFromNode);
};
