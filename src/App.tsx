import React, { useState, useEffect } from 'react';

import { getSource } from './get-source';

const App: React.FC = () => {

  const [config, setConfig] = useState("");
  const [source, setSource] = useState("");

  useEffect(() => {
    getSource(config)
      .then((newSource: string) => { setSource(newSource); })
      .catch((error: string) => { setSource(error); });
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
