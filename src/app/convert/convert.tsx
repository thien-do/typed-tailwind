import React, { useState } from "react";

import { Style } from "style";
import { Config, initialConfig } from "./config/config";
import { Playground } from "./playground/playground";
import { Source } from "./source/source";
import { Step } from "./step";

const col = Style().hFull().flex1().overflowHidden().$();

export const Convert: React.FC = () => {

  const [config, setConfig] = useState(initialConfig);
  const [source, setSource] = useState("");

  return (
    <div className={Style().hFull().flex().px16().py32().$()}>
      <div className={col}>
        <Step text="Step 1. Put your Tailwind config below:">
          <Config config={config} setConfig={setConfig} />
        </Step>
      </div>
      <div className={col}>
        <Step text="Step 2. Put this file into your codebase:">
          <Source config={config} source={source} setSource={setSource} />
        </Step>
      </div>
      <div className={col} style={{ minWidth: "480px" }}>
        <Step text="Step 3. Use the `Style` function:">
          <Playground source={source} />
        </Step>
      </div>
    </div>
  );
};
