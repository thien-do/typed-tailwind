import React from "react";

import { Tw } from "style";
import { Convert } from "./convert/convert";
import { Title } from "./title";

export const App: React.FC = () => {
  return (
    <div
      className={[
        Tw().overflowHidden().hScreen().flex().flexCol().$(),
        Tw().bgFixed().bgCenter().bgCover().$(), "bg-img-main",
      ].join(" ")}
    >
      <div className={Tw().overflowHidden().$()} style={{ flex: "1.6 1 0px" }}>
        <Convert />
      </div>
      <div className={Tw().flex1().$()}>
        <Title />
      </div>
    </div>
  );
};
