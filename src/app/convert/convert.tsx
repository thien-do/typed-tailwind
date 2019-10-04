import React, { useState } from "react";

import { Config, initialConfig } from "./config/config";
import { Playground } from "./playground/playground";
import { Source } from "./source/source";
import { Style } from "style";

const col = Style().flex1().overflowHidden().$();

export const Convert: React.FC = () => {

  const [config, setConfig] = useState(initialConfig);
  const [source, setSource] = useState("");

  return (
    <div className={Style().flex().p16().$()} style={{ height: "400px" }}>
      <div className={col}>
        <Config config={config} setConfig={setConfig} />
      </div>
      <div className={col}>
        <Source config={config} source={source} setSource={setSource} />
      </div>
      <div className={col} style={{ minWidth: "480px" }}>
        <Playground source={source} />
      </div>
    </div>
  );
};
