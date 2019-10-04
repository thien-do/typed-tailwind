import React from "react";

import { Style } from "style";
import { Foo } from "./convert/convert";

const img = `
https://images.unsplash.com/photo-1568878801942-6fc477a748db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1073&q=80
`

export const App: React.FC = () => {
  return (
    <div
      className={Style().hScreen().bgCover().$()}
      style={{ backgroundImage: `url(${img})`, backgroundPosition: "center" }}
    >
      <Foo />
    </div>
  );
};
