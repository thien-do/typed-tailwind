import React, { useState } from 'react';

const App: React.FC = () => {
  const [config, setConfig] = useState("");
  return (
    <div className="App">
      <textarea
        value={config}
        onChange={e => setConfig(e.currentTarget.value)}
      />
    </div>
  );
};

export default App;
