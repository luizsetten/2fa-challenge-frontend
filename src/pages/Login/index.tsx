import React, { useState } from 'react';
import axios from 'axios';

import './styles.css';

function Login(): JSX.Element {
  const [qrcode, setQrcode] = useState('');

  const generateSecret = async () => {
    try {
      const response = await axios.get('http://localhost:3333/');
      console.log(response.data.secret);

      const response2 = await axios.post(
        'http://localhost:3333/generate_qr_code',
        {
          secret: response.data.secret,
        }
      );

      console.log(response2);

      setQrcode(response2.data.qr_code);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container">
      <button onClick={generateSecret} type="button">
        Gerar Segredo
      </button>
      {qrcode && (
        <div className="login-info">
          <img src={qrcode} alt="QrCode" />
          <div className="verify-form">
            <input type="text" />
            <button type="button">Verificar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
