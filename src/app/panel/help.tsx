import React from "react";

import { Tw } from "style";

interface Props {
  help: string
}

export const Help: React.FC<Props> = (props) => (
  <div
    className={[
      Tw().text7().textCenter().font700().$(),
      Tw().$(),
    ].join("")}
    style={{
      textShadow: "rgba(0, 0, 0, 0.7) 0px 1px 4px"
    }}
  >
    {props.help}
  </div>
)
