import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import {IndexRoute} from 'react-router'

import Frame from '../layouts/Frame';
import Home from '../views/Home';
import Detail from '../views/Detail';

const customHistory = createBrowserHistory();

const routes =(
  <Router history={customHistory}>
    <Frame>
      <Route path='/' component={Home} />
      <Route path='/detail/:id' component={Detail} />
    </Frame>
  </Router>
);

export default routes;