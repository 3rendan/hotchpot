import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import './components/App.css';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import indexRoutes from './Router.js';


let hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);



serviceWorker.unregister();
