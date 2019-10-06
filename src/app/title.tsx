import React from "react";

import { Style } from "style";

const Link = () => {
  return (
    <a
      className={[
        Style().bgFixed().bgCenter().bgCover().$(), "bg-img-main",
        Style().roundedFull().px24().py12().shadowPanelInset().$(),
        Style().text7().font700().noUnderline().$(), "text-shadow",
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
        Style().hFull().wFull().flex().itemsCenter().$(),
        Style().shadowPanel().bg0At90().pl32(),
        "blur",
      ].join(" ")}
    >
      <div>
        <h1 className={Style().text96().leading1().font900().$()}>
          Typed Tailwind
        </h1>
        <div className={Style().h24().$()} />
        <p className={Style().text32().leading1().font600().$()}>
          <span className={Style().text5().$()}>
            Utility-first CSS framework, statically typed.
          </span>
          <span className={Style().pl24().$()} />
          <Link />
        </p>
      </div>
    </div>
  );
};
