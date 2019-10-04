import React, { useState } from "react";

import { Config, initialConfig } from "./config/config";
import { Demo } from "./demo/demo";
import { Source } from "./source/source";
import { Style } from "style";

const img = `
https://images.unsplash.com/photo-1564089969562-7b8667a4adec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80
`

const col = Style().flex1().overflowHidden().$();

export const Convert: React.FC = () => {

  const [config, setConfig] = useState(initialConfig);
  const [source, setSource] = useState("");

  return (
    <div
      className={Style().flex().bgCover().bgFixed().bgCenter().p16().$()}
      style={{ backgroundImage: `url(${img})`, height: "400px" }}
    >
      <div className={col}>
        <Config config={config} setConfig={setConfig} />
      </div>
      <div className={col}>
        <Source config={config} source={source} setSource={setSource} />
      </div>
      <div className={col} style={{ minWidth: "480px" }}>
        <Demo source={source} />
      </div>
    </div>
  );
};
