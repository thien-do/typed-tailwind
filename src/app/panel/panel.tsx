import React from "react";

import { Style } from "style";
import { Header } from "./header";

interface Props {
  children: React.ReactChild;
  title: string;
}

export const Panel: React.FC<Props> = (props) => {
  return (
    <div className={Style().wFull().hFull().p16().$()}>
      <div
        className={[
          Style().rounded4().shadowPanel().bg0At90().$(),
          Style().wFull().hFull().flex().flexCol().$()
        ].join(" ")}
        style={{
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
        }}
      >
        <div className={Style().flexNone().$()}>
          <Header title={props.title} />
        </div>
        <div className={Style().px16().flex1().overflowScroll().$()}>
          {props.children}
        </div>
      </div>
    </div>
  );
};
