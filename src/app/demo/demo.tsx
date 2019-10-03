import React, { useEffect, useRef } from "react";
import { IDisposable } from "monaco-editor";

interface Props {
  source: string;
}

export const Demo: React.FC<Props> = (props) => {

  const { source } = props;

  const container = useRef<HTMLDivElement>(null);
  const sourceAsLib = useRef<IDisposable| null>(null);

  useEffect(() => {
    if (!window.monaco || !container.current) { return; }
    window.monaco.editor.create(container.current, {
      value: [
        "// Try it:",
        "// E.g. Style().textBlue2().smBlock().$()",
        "const style: string =",
        "  Style()",
      ].join("\n"),
      language: "typescript",
      minimap: { enabled: false },
    });
  }, []);

  useEffect(() => {
    if (!window.monaco) { return; }
    sourceAsLib.current && sourceAsLib.current.dispose();
    sourceAsLib.current = window.monaco.languages.typescript
      .typescriptDefaults.addExtraLib(source);
  }, [source])

  return (
    <div ref={container} style={{ width: "500px", height: "500px" }} />
  );
};
