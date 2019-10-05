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
        <Step text="Step 1. Paste your Tailwind config here:">
          <Config config={config} setConfig={setConfig} />
        </Step>
      </div>
      <div className={col}>
        <Step text="Step 2. Save this file into your codebase:">
          <Source config={config} source={source} setSource={setSource} />
        </Step>
      </div>
      <div className={col} style={{ minWidth: "480px" }}>
        <Step text="Step 3. Import the `Style` function:">
          <Playground source={source} />
        </Step>
      </div>
    </div>
  );
};
