import React from "react";
import ReactDOM from "react-dom";

import "./style/style.css";
import { App } from "./app/app";
import { defineTheme } from "theme";
// import * as serviceWorker from "./serviceWorker";

const root = document.getElementById("root")

const init = () => {
  defineTheme();
  ReactDOM.render(<App />, root);
};

if (window.monaco) { init(); }
else { window.onMonacoLoad = () => { init(); }; }

// Turn this on when we're ready. See https://bit.ly/CRA-PWA
// serviceWorker.unregister();
