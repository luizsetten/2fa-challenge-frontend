import React, { useState } from 'react';

import { Login, Home } from '../pages';

import './routes.css';

function Routes(): JSX.Element {
  const [logged, setLoged] = useState(false);
  if (logged) {
    return <Home />;
  }

  return <Login setLogged={setLoged} />;
}

export default Routes;
