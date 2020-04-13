import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import HomePage from '../pages/Home/Home.page';
import history from './history';
import SignupPage from '../pages/Signup/Signup.page';

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" exact component={SignupPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
