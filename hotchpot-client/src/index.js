import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Index from './views/Index.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Navigation from './components/Navigation.js';


let hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Header />
    <Navigation />
    <Index />
    <Footer />
  </Router>,
  document.getElementById("root")
);



serviceWorker.unregister();
