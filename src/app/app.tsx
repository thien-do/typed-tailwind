import React from "react";

import { Style } from "style";
import { Convert } from "./convert/convert";
import { Title } from "./title";

// https://unsplash.com/photos/yXABLtZJpdI
const img = [
  "https://images.unsplash.com/photo-1564089969562-7b8667a4adec",
  "?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
].join("")

export const App: React.FC = () => {
  return (
    <div
      className={[
        Style().overflowHidden().bgCover().bgFixed().bgCenter().$(),
        Style().hScreen().flex().flexCol().$(),
      ].join("")}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className={Style().overflowHidden().$()} style={{ flex: "1.6 1 0px" }}>
        <Convert />
      </div>
      <div className={Style().flex1().$()}>
        <Title />
      </div>
    </div>
  );
};
