import React, { useState, useEffect } from "react";

import { getSource } from "./source/source";
import { sampleConfig } from "./config";

const initialConfig: string =
  window.localStorage.getItem("config") || sampleConfig;

const App: React.FC = () => {

  const [config, setConfig] = useState(initialConfig);
  const [source, setSource] = useState("");

  useEffect(() => {
    getSource(config)
      .then((newSource: string) => { setSource(newSource); })
      .catch((error: string) => { setSource(error); });
  }, [config]);

  useEffect(() => {
    window.localStorage.setItem("config", config);
  }, [config]);

  return (
    <div className="App">
      <textarea
        value={config}
        onChange={e => setConfig(e.currentTarget.value)}
      />
      <textarea value={source} readOnly />
    </div>
  );
};

export default App;
