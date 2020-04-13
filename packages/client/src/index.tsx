import './styles/base.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router/AppRouter';

(async () => ReactDOM.render(<AppRouter />, document.getElementById('app')))();
