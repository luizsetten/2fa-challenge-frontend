import React from 'react';

import { Login, Home } from '../pages';

import './routes.css';

function Routes(): JSX.Element {
  const user = false;
  if (user) {
    return <Home />;
  }

  return <Login />;
}

export default Routes;
