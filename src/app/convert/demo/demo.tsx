import React, { useEffect, useRef } from "react";
import * as monaco from "monaco-editor";
import { Style } from "style";
import { createEditor } from "app/editor/editor";

interface Props {
  source: string;
}

const editorOptions: monaco.editor.IEditorConstructionOptions = {
  language: "typescript",
  value: [
    "// Try it:",
    "// E.g. Style().textBlue2().smBlock().$()",
    "const style: string =",
    "  Style()",
    "",
  ].join("\n"),
};

export const Demo: React.FC<Props> = (props) => {

  const { source } = props;

  const container = useRef<HTMLDivElement>(null);
  const sourceAsLib = useRef<monaco.IDisposable| null>(null);

  useEffect(() => {
    if (!container.current) { return; }
    createEditor(container.current, editorOptions);
  }, []);

  useEffect(() => {
    if (!window.monaco) { return; }
    sourceAsLib.current && sourceAsLib.current.dispose();
    sourceAsLib.current = window.monaco.languages.typescript
      .typescriptDefaults.addExtraLib(source);
  }, [source])

  return (
    <div ref={container} className={Style().wFull().hFull().$()} />
  );
};
