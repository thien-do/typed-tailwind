import { editor } from "monaco-editor";

const base: editor.IEditorConstructionOptions = {
  folding: false,
  fontFamily: "Source Code Pro, monospace",
  fontSize: 14,
  lineHeight: 24,
  lineNumbers: "off",
  minimap: { enabled: false },
};

interface Options {
  name: string;
  language: string;
  value: string;
}

export const createEditor = (element: HTMLElement, options: Options)  => {
  if (!window.monaco) { return null; }
  const { name, value, language } = options;
  const uri = window.monaco.Uri.parse(`file:///${name}.tsx`);
  const model = window.monaco.editor.createModel(value, language, uri);
  return window.monaco.editor.create(element, { ...base, model });
};
