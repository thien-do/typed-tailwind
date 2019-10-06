import React from "react";

import { Tw } from "style";

const Link = () => {
  return (
    <a
      className={[
        Tw().bgFixed().bgCenter().bgCover().$(), "bg-img-main",
        Tw().roundedFull().px24().py12().shadowPanelInset().$(),
        Tw().text7().font700().noUnderline().$(), "text-shadow",
      ].join(" ")}
      href="https://github.com/dvkndn/typed-tailwind"
    >
      Learn more →
    </a>
  );
};

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
        <p className={Tw().text32().leading1().font600().$()}>
          <span className={Tw().text5().$()}>
            Brings types to Tailwind CSS.
          </span>
          <span className={Tw().pl24().$()} />
          <Link />
        </p>
      </div>
    </div>
  );
};
