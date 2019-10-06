import React, { useEffect, useRef } from "react";

import { Tw } from "style";
import { getSource } from "./get-source";
import { Panel } from "app/panel/panel";
import { createEditor, Editor } from "app/editor/editor";

interface Props {
  config: string;
  source: string;
  setSource: (source: string) => void;
}

export const Source: React.FC<Props> = (props) => {

  const { source, config, setSource } = props;
  const container = useRef<HTMLDivElement>(null);
  const editor = useRef<Editor | null>(null);

  // Generate new source
  useEffect(() => {
    getSource(config)
      .then((newSource: string) => { setSource(newSource); })
      .catch((error: string) => { setSource(error); });
  }, [config, setSource]);

  // Init editor
  useEffect(() => {
    const element = container.current; if (!element) { return; }
    const model = { name: "source", language: "typescript", value: "" };
    editor.current = createEditor(element, model, { readOnly: true });
  }, [])

  // Set new source to editor
  useEffect(() => {
    if (!editor.current) { return; }
    editor.current.setValue(source);
  }, [source]);

  return (
    <Panel title="./style.ts">
      <div ref={container} className={Tw().wFull().hFull().$()} />
    </Panel>
  );
};
