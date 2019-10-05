import React from "react";

import { Style } from "style";

interface Props {
  children: React.ReactChild;
  text: string;
}

export const Step: React.FC<Props> = (props) => {
  return (
    <div className={Style().flex().flexCol().hFull().$()}>
      <div className={Style().flexNone().$()}>
        <p
          className={[
            Style().text14().leading16().textCenter().font600().$(),
            "text-shadow"
          ].join(" ")}
        >{props.text}</p>
      </div>
      <div className={Style().flex1().$()}>
        {props.children}
      </div>
    </div>
  );
};
