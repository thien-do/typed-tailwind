import React, { useEffect, useState } from "react";

import { Style } from "style";
import { getSource } from "./get-source";
import { Panel } from "app/panel/panel";

interface Props {
  config: string;
  source: string;
  setSource: (source: string) => void;
}

export const Source: React.FC<Props> = (props) => {

  const { source, config, setSource } = props;

  const [html, setHtml] = useState("");

  useEffect(() => {
    getSource(config)
      .then((newSource: string) => { setSource(newSource); })
      .catch((error: string) => { setSource(error); });
  }, [config, setSource]);

  useEffect(() => {
    if (!window.monaco) { return; }
    window.monaco.editor.colorize(
      source.replace("const Style", "export const Style"),
      "typescript",
      {}
    ).then(setHtml);
  }, [source]);

  return (
    <Panel title="style.ts">
      <div className={Style().wFull().hFull().overflowScroll().$()}>
        <pre
          className={Style().fontMono().selectAll().$()}
          data-lang="text/typescript"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Panel>
  );
};
