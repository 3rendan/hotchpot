import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Index from './views/Index.js'
import "./index.css";


let hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Index />
  </Router>,
  document.getElementById("root")
);



serviceWorker.unregister();
