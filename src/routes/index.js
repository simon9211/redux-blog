import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { createBrowserHistory } from "history";
import Home from '../views/Home'
import Detail from '../views/Detail'

const customHistory = createBrowserHistory();

const routes =(
  <Router history={customHistory}>
    <Route path='/' component={Home} />
    <Route path='/detail/:id' component={Detail} />
  </Router>
);

export default routes;