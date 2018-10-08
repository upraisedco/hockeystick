import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './pages/Home.js';
import PageNotFound from './pages/PageNotFound.js';

const Routes = () => (
  <Switch>
    <Route path='/' component={Home} exact />
    <Route path='/404' component={PageNotFound} exact />
    {/* This has to be the last one */}
    <Redirect from='*' to='/404' />
  </Switch>
);

export default Routes;
