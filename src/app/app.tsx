import React from "react";

import { Tw } from "style";
import { Convert } from "./convert/convert";
import { Title } from "./title";

export const App: React.FC = () => {
  return (
    <div className={Tw().bg3().hScreen().flex().flexCol().py32().$()}>
      <div className={Tw().flex1().overflowHidden().$()}><Convert /></div>
      <div className={Tw().flexNone().py32().$()}><Title /></div>
    </div>
  );
};
