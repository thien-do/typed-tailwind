import React, { useEffect, useRef } from "react";
import * as monaco from "monaco-editor";
import { Style } from "style";
import { createEditor } from "app/editor/editor";
import { Panel } from "app/panel/panel";

interface Props {
  source: string;
}

const editorOptions: monaco.editor.IEditorConstructionOptions = {
  language: "typescript",
  value: `// Try it:
// E.g. Style().textBlue2().smBlock().$()
const style: string =
  Style()

// In React:
// <div className={Style().text4().$()} />
`,
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
    <Panel title="playground.ts">
      <div ref={container} className={Style().wFull().hFull().$()} />
    </Panel>
  );
};
