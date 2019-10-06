import React from "react";

import { Tw } from "style";

interface Props {
  title: string
}

const Button = () => (
  <div className={Tw().w12().h12().bg4().roundedFull().$()} />
);

const Buttons = () => (
  <div className={Tw().flex().$()}>
    <Button /><div className={Tw().w8().$()} />
    <Button /><div className={Tw().w8().$()} />
    <Button />
  </div>
);

const Title: React.FC<Props> = (props) => (
  <div className={[
    Tw().hFull().flex().itemsCenter().justifyCenter().$(),
    Tw().text5().font500().leading16().$(),
  ].join("")}>
    <span>{props.title}</span>
  </div>
);

export const Header: React.FC<Props> = (props) => (
  <div>
    <div className={Tw().relative().p16().$()}>
      <Buttons />
      <div className={Tw().absolute().inset0().$()}>
        <Title title={props.title} />
      </div>
    </div>
  </div>
)
