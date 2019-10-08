import React from "react";

import { Tw } from "style";
import { Convert } from "./convert/convert";
import { Title } from "./title";

export const App: React.FC = () => {
  return (
    <div className={Tw().bg3().hScreen().lgFlex().flexCol().py32().$()}>
      <div className={Tw().order1().flexNone().py32().$()}><Title /></div>
      <div className={Tw().order0().flex1().overflowHidden().$()}><Convert /></div>
    </div>
  );
};
