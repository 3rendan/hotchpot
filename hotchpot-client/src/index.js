import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import './index.css';
import Index from './views/Index.js';
import Header from './views/Header.js';
import Footer from './views/Footer.js';
// import '/src/css/main.css';
import * as serviceWorker from './serviceWorker';
import indexRoutes from './routes/index.js';


let hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Header/>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
    <Footer/>
  </Router>,
  document.getElementById("root")
);



serviceWorker.unregister();
