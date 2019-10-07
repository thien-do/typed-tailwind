import React from "react";

import { Tw } from "style";

interface Props {
  title: string
}

const Title: React.FC<Props> = (props) => (
  <div className={[
    Tw().hFull().flex().itemsCenter().justifyCenter().$(),
    Tw().font500().text4().leading16().$(),
  ].join("")}>
    <span>{props.title}</span>
  </div>
);

export const Header: React.FC<Props> = (props) => (
  <div>
    <div className={Tw().relative().p12().$()}>
      <div className={Tw().w12().h12().bg6().roundedFull().$()} />
      <div className={Tw().absolute().inset0().$()}>
        <Title title={props.title} />
      </div>
    </div>
  </div>
)
