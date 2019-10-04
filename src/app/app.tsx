import React from "react";

import { Convert } from "./convert/convert";
import { Style } from "style";

// https://unsplash.com/photos/yXABLtZJpdI
const img = [
  "https://images.unsplash.com/photo-1564089969562-7b8667a4adec",
  "?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
].join("")

export const App: React.FC = () => {
  return (
    <div
      className={[
        Style().hScreen().overflowHidden().$(),
        Style().bgCover().bgFixed().bgCenter().$(),
      ].join("")}
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* <div
        className={Style().bg0At90().shadowPanel().$()}
        style={{
          height: "200px",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
        }}
      /> */}
      <Convert />
    </div>
  );
};
