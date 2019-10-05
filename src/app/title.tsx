import React from "react";

import { Style } from "style";

export const Title: React.FC = () => {
  return (
    <div
      className={[
        Style().hFull().wFull().flex().justifyCenter().itemsCenter().$(),
      ].join("")}
    >
      <div>
        <h1 className={Style().text96().leading1().font900().$()}>
          Typed Tailwind
        </h1>
        <p>
          Generate TypeScript source code for Tailwind.
        </p>
      </div>
    </div>
  );
};
