import React from 'react';

import { Login, Home } from './pages';

import './App.css';

function App(): JSX.Element {
  const user = false;
  if (user) {
    return <Home />;
  }

  return <Login />;
}

export default App;
