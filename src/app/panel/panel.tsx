import React from "react";

import { Style } from "style";
import { Header } from "./header";

interface Props {
  children: React.ReactChild;
  title: string;
}

const panelStyles = {
  className: [
    Style().rounded4().shadowPanel().bg0At90().$(),
    Style().wFull().flex().flexCol().$()
  ].join(" "),
  style: {
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    height: "300px",
  },
};

export const Panel: React.FC<Props> = (props) => {
  return (
    <div {...panelStyles}>
      <div className={Style().flexNone().$()}>
        <Header title={props.title} />
      </div>
      <div className={Style().flex1().overflowHidden().$()}>
        {props.children}
      </div>
    </div>
  );
};