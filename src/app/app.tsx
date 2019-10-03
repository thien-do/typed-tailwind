import React, { useState } from "react";

import { Config, initialConfig } from "./config/config";
import { Demo } from "./demo/demo";
import { Source } from "./source/source";
import { Style } from "style";

export const App: React.FC = () => {

  const [config, setConfig] = useState(initialConfig);
  const [source, setSource] = useState("");

  return (
    <div className={Style().flex().$()}>
      <div className={Style().flex1().$()}>
        <Config config={config} setConfig={setConfig} />
      </div>
      <div className={Style().flex1().$()}>
        <Source config={config} source={source} setSource={setSource} />
      </div>
      <div className={Style().flex1().$()}>
        <Demo source={source} />
      </div>
    </div>
  );
};
