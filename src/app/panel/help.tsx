import React from "react";

import { Style } from "style";

interface Props {
  help: string
}

export const Help: React.FC<Props> = (props) => (
  <div
    className={[
      Style().text7().textCenter().font700().$(),
      Style().$(),
    ].join("")}
    style={{
      textShadow: "rgba(0, 0, 0, 0.7) 0px 1px 4px"
    }}
  >
    {props.help}
  </div>
)
