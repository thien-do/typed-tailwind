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
        className={`${
          Style().wFull().hFull().bg0At95().rounded4().$()
        }${
          Style().flex().flexCol().$()
        }`}
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: "rgba(0, 0, 0, 0.4) 0 4px 16px",
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
