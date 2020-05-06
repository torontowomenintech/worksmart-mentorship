import './styles/base.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router/AppRouter';
import { User } from './containers/user.container';

(async () =>
  ReactDOM.render(
    <User.Provider>
      <AppRouter />
    </User.Provider>,
    document.getElementById('app')
  ))();
