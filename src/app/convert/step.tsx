import React from "react";

import { Tw } from "style";

interface Props {
  children: React.ReactChild;
  text: string;
}

export const Step: React.FC<Props> = (props) => {
  return (
    <div className={Tw().flex().flexCol().hFull().$()}>
      <div className={Tw().flexNone().$()}>
        <p className={Tw().text8().textCenter().font600().$()}>
          {props.text}
        </p>
      </div>
      <div className={Tw().flex1().overflowHidden().$()}>
        {props.children}
      </div>
    </div>
  );
};
