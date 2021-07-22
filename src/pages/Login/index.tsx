import React from 'react';
import './styles.css';

function Login(): JSX.Element {
  return (
    <div className="container">
      <input type="text" placeholder="Usuário" />
      <input type="text" placeholder="Senha" />
      <button type="button">Fazer login</button>
    </div>
  );
}

export default Login;
