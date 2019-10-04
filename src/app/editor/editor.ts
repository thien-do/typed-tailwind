import { editor } from "monaco-editor";

const options: editor.IEditorConstructionOptions = {
  folding: false,
  fontFamily: "Source Code Pro, monospace",
  fontSize: 14,
  lineHeight: 24,
  lineNumbers: "off",
  minimap: { enabled: false },
};

export const createEditor = (
  element: HTMLElement,
  name: string,
  language: string,
  value: string,
): editor.IStandaloneCodeEditor | null => {
  if (!window.monaco) { return null; }
  const uri = window.monaco.Uri.parse(`file:///${name}.tsx`);
  const model = window.monaco.editor.createModel(value, language, uri);
  return window.monaco.editor.create(element, { ...options, model });
};
