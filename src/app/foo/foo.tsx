import React, { useState } from "react";

import { Style } from "style";
import { Config, initialConfig } from "./config/config";
import { Demo } from "./demo/demo";
import { Source } from "./source/source";
import { Panel } from "./panel/panel";

export const Foo: React.FC = () => {

  const [config, setConfig] = useState(initialConfig);
  const [source, setSource] = useState("");

  return (
    <div
      className={Style().flex().hScreen().$()}
      style={{ height: "400px" }}
    >
      <div className={Style().flex1().overflowHidden().$()}>
        <Panel title="tailwind.config.js">
          <Config config={config} setConfig={setConfig} />
        </Panel>
      </div>
      <div className={Style().flex1().overflowHidden().$()}>
        <Panel title="style.ts">
          <Source config={config} source={source} setSource={setSource} />
        </Panel>
      </div>
      <div className={Style().flex1().overflowHidden().$()}>
        <Panel title="playground.ts"><Demo source={source} /></Panel>
      </div>
    </div>
  );
};
