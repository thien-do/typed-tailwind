import { editor } from "monaco-editor";

const base: editor.IEditorConstructionOptions = {
  folding: false,
  fontFamily: "Source Code Pro, monospace",
  fontSize: 14,
  lineHeight: 24,
  lineNumbers: "off",
  minimap: { enabled: false },
  contextmenu: false,
};

interface ModelOptions {
  name: string;
  language: string;
  value: string;
}

export type Editor = editor.IStandaloneCodeEditor;

export const createEditor = (
  element: HTMLElement,
  modelOptions: ModelOptions,
  options: editor.IEditorConstructionOptions = {}
)  => {
  const { monaco } = window; if (!monaco) { return null; }
  const { name, value, language } = modelOptions;
  const uri = monaco.Uri.parse(`file:///${name}.tsx`);
  const model = monaco.editor.createModel(value, language, uri);
  return monaco.editor.create(element, { ...base, ...options, model });
};
