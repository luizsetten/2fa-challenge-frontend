import React, { useState } from 'react';

import { Login, Home } from '../pages';

import './routes.css';

function Routes(): JSX.Element {
  const [logged, setLoged] = useState(false);
  const [secret, setSecret] = useState('');
  if (logged) {
    return <Home secret={secret} />;
  }

  return <Login setLogged={setLoged} setSecret={setSecret} />;
}

export default Routes;
