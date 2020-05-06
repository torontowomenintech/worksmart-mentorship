import React, { useEffect } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from './history';

import { User, UserRes } from '../containers/user.container';
import API from '../lib/API';

import HomePage from '../pages/Home/Home.page';
import SignupPage from '../pages/Signup/Signup.page';
import LoginPage from '../pages/Login/Login.page';
import ProfilePage from '../pages/Profile/Profile.page';

import Header from '../components/Header/Header';

const AppRouter = () => {
  const { setUser } = User.useContainer();

  const refreshUser = async (): Promise<UserRes> => {
    const res: UserRes = await API.refreshToken();

    setUser(res);
    return res;
  };

  useEffect(() => {
    // Attempt to refresh the user every time the app is reloaded
    refreshUser();

    // Set an interval to refresh the token every 14.5 minutes (30s before token expiry)
    const id = setInterval(async () => {
      const res = await refreshUser();

      // If refresh fails clear the token
      if (!res.token) clearInterval(id);
    }, 14.5 * 60 * 1000);
  }, []);

  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/profile" exact component={ProfilePage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
