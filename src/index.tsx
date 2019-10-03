import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { App } from "./app/app";
// import * as serviceWorker from "./serviceWorker";

const root = document.getElementById("root")

const render = () => { ReactDOM.render(<App />, root); };

if (window.monaco) { render(); }
else { window.onMonacoLoad = () => { render(); }; }

// Turn this on when we're ready. See https://bit.ly/CRA-PWA
// serviceWorker.unregister();
