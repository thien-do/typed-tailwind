import React, { useEffect, useRef } from "react";
import * as monaco from "monaco-editor";
import { Style } from "style";
import { createEditor } from "app/editor/editor";
import { Panel } from "app/panel/panel";

interface Props {
  source: string;
}

const value = `import { Style } from "style";

const style: string =
  Style()

// E.g.:
// - Style().text0().bg().$();
`;

const getTSDefaults = () => {
  if (!window.monaco) { return null; }
  return window.monaco.languages.typescript.typescriptDefaults;
};

export const Demo: React.FC<Props> = (props) => {

  const { source } = props;

  const container = useRef<HTMLDivElement>(null);
  const lib = useRef<monaco.IDisposable | null>(null);

  useEffect(() => {
    if (!container.current) { return; }
    createEditor(container.current, "demo", "typescript", value);
  }, []);

  useEffect(() => {
    lib.current && lib.current.dispose();
    const tsDefaults = getTSDefaults(); if (!tsDefaults) { return; }
    lib.current = tsDefaults.addExtraLib(source, "file:///style.ts");
  }, [source])

  return (
    <Panel title="playground.ts">
      <div ref={container} className={Style().wFull().hFull().$()} />
    </Panel>
  );
};
