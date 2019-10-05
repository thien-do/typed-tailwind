import React from "react";

import { Style } from "style";
import { Convert } from "./convert/convert";
import { Title } from "./title";

export const App: React.FC = () => {
  return (
    <div
      className={[
        Style().overflowHidden().hScreen().flex().flexCol().$(),
        Style().bgFixed().bgCenter().bgCover().$(), "bg-img-main",
      ].join(" ")}
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
