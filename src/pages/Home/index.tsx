import React from 'react';

type HomeProps = {
  secret: any;
};

function Home({ secret }: HomeProps): JSX.Element {
  return (
    <div className="container">
      <p>Olá usuário, sua secret key é: {String(secret)}</p>
      <br />
      <span>
        No backend foi utilizado o ExpressJS, qrcode, speakeasy (para login em
        duas eapas)
      </span>
      <a href="https://github.com/luizsetten/2fa-challenge-backend">
        Repositório do backend
      </a>
      <span>No frontend foi utilizado ReactJS e axios</span>
      <a href="https://github.com/luizsetten/2fa-challenge-frontend">
        Repositório do frontend
      </a>
    </div>
  );
}

export default Home;
