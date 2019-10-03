import React, { useState, useEffect, useRef } from "react";

import { getSource } from "../source/source";
import { sampleConfig } from "../config";

const initialConfig: string =
  window.localStorage.getItem("config") || sampleConfig;

export const App: React.FC = () => {

  const [config, setConfig] = useState(initialConfig);
  const [source, setSource] = useState("");
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getSource(config)
      .then((newSource: string) => { setSource(newSource); })
      .catch((error: string) => { setSource(error); });
  }, [config]);

  useEffect(() => {
    window.localStorage.setItem("config", config);
  }, [config]);

  useEffect(() => {
    if (!window.monaco) { return; }
    if (!editorRef.current) { return; }
    const editor = window.monaco.editor;
    editor.create(editorRef.current, {
      value: [
        'function x() {',
        '\tconsole.log("Hello world!");',
        '}'
      ].join('\n'),
      language: "typescript",
    });
    console.log(window.monaco && window.monaco.editor);
  }, [source]);

  return (
    <div>
      <textarea
        value={config}
        onChange={e => setConfig(e.currentTarget.value)}
      />
      <textarea value={source} readOnly />
      <div ref={editorRef} style={{ width: "500px", height: "500px" }} />
    </div>
  );
};
