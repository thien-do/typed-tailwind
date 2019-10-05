import React from "react";

import { Style } from "style";

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
        <p className={Style().text32().font600().$()}>
          <span className={Style().text5().$()}>
            Generate TypeScript source code for Tailwind CSS.
          </span>
        </p>
      </div>
    </div>
  );
};
