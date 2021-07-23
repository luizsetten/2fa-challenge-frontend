import React from 'react';

type HomeProps = {
  secret: any;
};

function Home({ secret }: HomeProps): JSX.Element {
  return (
    <div className="container">
      <p>Olá usuário, sua secret key é: {String(secret)}</p>
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
