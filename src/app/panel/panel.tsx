import React from "react";

import { Tw } from "style";
import { Header } from "./header";

interface Props {
  children: React.ReactChild;
  title: string;
}

export const Panel: React.FC<Props> = (props) => {
  return (
    // Padding should be defined here to avoid consumers overflow hidden
    // the shadow
    <div className={Tw().hFull().px16().pt16().pb24().$()}>
      <div className={[
        Tw().rounded4().shadowPanel().bg0At90().$(),
        Tw().hFull().flex().flexCol().$(),
        "blur",
      ].join(" ")}>
        <div className={Tw().flexNone().$()}>
          <Header title={props.title} />
        </div>
        <div className={Tw().flex1().overflowHidden().$()}>
          {props.children}
        </div>
      </div>
    </div>
  );
};
