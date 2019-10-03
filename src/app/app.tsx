import React, { useState } from "react";

import { Config, initialConfig } from "./config/config";
import { Demo } from "./demo/demo";
import { Source } from "./source/source";

export const App: React.FC = () => {

  const [config, setConfig] = useState(initialConfig);
  const [source, setSource] = useState("");

  return (
    <div>
      <Config config={config} setConfig={setConfig} />
      <Source config={config} source={source} setSource={setSource} />
      <Demo source={source} />
    </div>
  );
};
