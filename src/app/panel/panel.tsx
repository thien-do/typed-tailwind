import React from "react";

import { Style } from "style";
import { Header } from "./header";

interface Props {
  children: React.ReactChild;
  title: string;
}

export const Panel: React.FC<Props> = (props) => {
  return (
    // Padding should be defined here to avoid consumers overflow hidden
    // the shadow
    <div className={Style().hFull().px16().pt16().pb24().$()}>
      <div className={[
        Style().rounded4().shadowPanel().bg0At90().$(),
        Style().hFull().flex().flexCol().$(),
        "blur",
      ].join(" ")}>
        <div className={Style().flexNone().$()}>
          <Header title={props.title} />
        </div>
        <div className={Style().flex1().overflowHidden().$()}>
          {props.children}
        </div>
      </div>
    </div>
  );
};
