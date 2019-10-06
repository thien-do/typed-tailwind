import React from "react";

import { Tw } from "style";

const Description = () => (
  <p className={Tw().text32().leading1().font600().$()}>
    <span className={Tw().text5().$()}>
      Brings types to Tailwind CSS.
    </span>
    <span> </span>
    <a
      className={[
        Tw().text7().font700().noUnderline().$(),
        Tw().borderB2Px().border4().hoverBorder7().pb4().$(),
        "transition",
      ].join(" ")}
      href="https://github.com/dvkndn/typed-tailwind"
    >Learn more →</a>
  </p>
);

export const Title: React.FC = () => {
  return (
    <div
      className={[
        Tw().hFull().wFull().flex().itemsCenter().$(),
        Tw().shadowPanel().bg0At90().pl32(),
        "blur",
      ].join(" ")}
    >
      <div>
        <h1 className={Tw().text96().leading1().font900().$()}>
          Typed Tailwind
        </h1>
        <div className={Tw().h24().$()} />
        <Description />
      </div>
    </div>
  );
};
