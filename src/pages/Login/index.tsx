import React, { useState } from 'react';
import api from '../../services/api';

import './styles.css';

function Login(): JSX.Element {
  const [qrcode, setQrcode] = useState('');

  const generateSecret = async () => {
    try {
      const response = await api.get('/');
      console.log(response.data.secret);

      const response2 = await api.post('/generate_qr_code', {
        secret: response.data.secret,
      });

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
