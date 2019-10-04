import { editor } from "monaco-editor";

const defaultOptions: editor.IEditorConstructionOptions = {
  folding: false,
  fontFamily: "Source Code Pro, monospace",
  fontSize: 14,
  lineHeight: 24,
  lineNumbers: "off",
  minimap: { enabled: false },
};

export const createEditor = (
  element: HTMLElement,
  options?: editor.IEditorConstructionOptions
): editor.IStandaloneCodeEditor | null => {
  if (!window.monaco) { return null; }
  const finalOptions = { ...defaultOptions, ...options };
  return window.monaco.editor.create(element, finalOptions);
};
