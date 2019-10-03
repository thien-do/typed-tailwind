import React, { useEffect } from "react";

import { getSource } from "./get-source";
import { Style } from "style";

interface Props {
  config: string;
  source: string;
  setSource: (source: string) => void;
}

export const Source: React.FC<Props> = (props) => {

  const { source, config, setSource } = props;

  useEffect(() => {
    getSource(config)
      .then((newSource: string) => { setSource(newSource); })
      .catch((error: string) => { setSource(error); });
  }, [config, setSource]);

  return (
    <textarea
      className={Style().wFull().hFull().selectAll().$()}
      value={source} readOnly
    />
  );
};
