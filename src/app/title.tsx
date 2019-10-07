import React from "react";

import { Tw } from "style";

const Description = () => (
  <p className={Tw().text32().leading1().font500().$()}>
    <span className={Tw().text6().$()}>
      Brings types to Tailwind CSS.
    </span>
    <span> </span>
    <a
      className={Tw().text8().noUnderline().$()}
      href="https://github.com/dvkndn/typed-tailwind"
    >Learn more →</a>
  </p>
);

export const Title: React.FC = () => {
  return (
    <div
      className={[
        Tw().hFull().wFull().flex().itemsCenter().$(),
        Tw().pl32().text8(),
      ].join(" ")}
    >
      <div>
        <h1 className={Tw().text96().nTracking1().leading1().font600().$()}>
          Typed Tailwind
        </h1>
        <div className={Tw().h24().$()} />
        <Description />
      </div>
    </div>
  );
};
