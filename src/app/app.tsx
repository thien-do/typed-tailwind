import React, { useState } from "react";

import { Style } from "style";
import { Config, initialConfig } from "./config/config";
import { Demo } from "./demo/demo";
import { Source } from "./source/source";

export const App: React.FC = () => {

  const [config, setConfig] = useState(initialConfig);
  const [source, setSource] = useState("");

  return (
    <div className={Style().flex().hScreen().$()}>
      <div className={Style().flex1().overflowHidden().$()}>
        <Config config={config} setConfig={setConfig} />
      </div>
      <div className={Style().flex1().overflowHidden().$()}>
        <Source config={config} source={source} setSource={setSource} />
      </div>
      <div className={Style().flex1().overflowHidden().$()}>
        <Demo source={source} />
      </div>
    </div>
  );
};
