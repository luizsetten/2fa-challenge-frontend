import React from 'react';

function Home(): JSX.Element {
  return (
    <div className="container">
      <p>Olá usuário</p>
      <a href="https://github.com/luizsetten/2fa-challenge-backend">
        Repositório do backend
      </a>
      <a href="https://github.com/luizsetten/2fa-challenge-frontend">
        Repositório do frontend
      </a>
    </div>
  );
}

export default Home;
