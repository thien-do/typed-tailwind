import React from "react";

import { Tw } from "style";

const Description = () => (
  <p className={Tw().text32().leading40().font500().$()}>
    <span className={Tw().text6().$()}>
      Brings types to Tailwind CSS.
    </span>
    <span> </span>
    <a
      className={Tw().text8().noUnderline().whitespaceNoWrap().$()}
      href="https://github.com/dvkndn/typed-tailwind"
    >Learn more →</a>
  </p>
);

export const Title: React.FC = () => {
  return (
    <div
      className={[
        Tw().hFull().wFull().flex().itemsCenter().$(),
        Tw().px16().lgPx32().text8(),
      ].join(" ")}
    >
      <div>
        <h1 className={[
          Tw().nTracking1().font600().$(),
          Tw().text48().leading56().lgText96().lgLeading1().$(),
        ].join(" ")}>
          Typed Tailwind
        </h1>
        <div className={Tw().h24().$()} />
        <Description />
      </div>
    </div>
  );
};
