import React, { useEffect } from "react";

import { sample } from "./sample";
import { Style } from "style";

export const initialConfig: string =
  window.localStorage.getItem("config") || sample;

interface Props {
  config: string;
  setConfig: (config: string) => void;
}

export const Config: React.FC<Props> = (props) => {

  const { config, setConfig } = props;

  useEffect(() => {
    window.localStorage.setItem("config", config);
  }, [config]);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setConfig(e.currentTarget.value)

  return (
    <textarea
      className={Style().wFull().hFull().$()}
      value={config} onChange={onChange}
    />
  );
};
