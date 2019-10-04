import React from "react";

import { Convert } from "./convert/convert";

export const App: React.FC = () => {
  return (
    <div>
      <div style={{ height: "200px" }} />
      <Convert />
      <div style={{ height: "1000px" }} />
    </div>
  );
};
