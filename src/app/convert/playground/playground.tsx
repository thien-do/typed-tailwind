import React, { useEffect, useRef } from "react";
import * as monaco from "monaco-editor";
import { Style } from "style";
import { createEditor } from "app/editor/editor";
import { Panel } from "app/panel/panel";

interface Props {
  source: string;
}

const editorOptions = {
  name: "playground",
  language: "typescript",
  value: `import { Style } from "style";

const style: string =
  Style()

// E.g.:
// - Style().text0().bg().$();
`
};

export const Playground: React.FC<Props> = (props) => {

  const { source } = props;

  const container = useRef<HTMLDivElement>(null);
  const lib = useRef<monaco.IDisposable | null>(null);

  useEffect(() => {
    if (!container.current) { return; }
    createEditor(container.current, editorOptions);
  }, []);

  useEffect(() => {
    lib.current && lib.current.dispose();
    if (!window.monaco) { return; }
    lib.current = window.monaco.languages.typescript.typescriptDefaults
      .addExtraLib(source, "file:///style.ts");
  }, [source])

  return (
    <Panel title="playground.ts">
      <div ref={container} className={Style().wFull().hFull().$()} />
    </Panel>
  );
};
