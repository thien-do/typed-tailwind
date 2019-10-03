import React, { useEffect, useRef } from "react";

interface Props {
  source: string;
}

// window.monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
//   jsx: window.monaco.languages.typescript.JsxEmit.React
// })
// window.monaco.languages.typescript.typescriptDefaults
//   .addExtraLib(props.source);

export const Demo: React.FC<Props> = (props) => {

  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.monaco) { return; }
    if (!container.current) { return; }

    window.monaco.editor.create(container.current, {
      value: "console.log(\"Hello world!\");",
      language: "typescript",
    });
  }, []);

  return (
    <div ref={container} style={{ width: "500px", height: "500px" }} />
  );
};
