import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router/AppRouter';

const render = () => {
  ReactDOM.render(<AppRouter />, document.getElementById('root'));
};

render();
