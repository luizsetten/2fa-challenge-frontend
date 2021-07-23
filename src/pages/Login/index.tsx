import React, { useState } from 'react';
import api from '../../services/api';

import './styles.css';

function Login(): JSX.Element {
  const [qrcode, setQrcode] = useState('');
  const [secret, setSecret] = useState('');
  const [token, setToken] = useState('');
  const [validToken, setValidToken] = useState(false);

  const generateSecret = async () => {
    try {
      const response = await api.get('/get_secret');
      setSecret(response.data.secret.ascii);

      const response2 = await api.post('/generate_qr_code', {
        secret: response.data.secret,
      });
      setQrcode(response2.data.qr_code);
    } catch (e) {
      alert('Erro ao gerar o QRCode');
    }
  };

  const verifyToken = async () => {
    const response = await api.post('/verify_token', {
      secret,
      token,
    });
    setValidToken(response.data.token_is_valid);
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
            <input type="text" onChange={(e) => setToken(e.target.value)} />
            <button type="button" onClick={verifyToken}>
              Verificar
            </button>
          </div>
          {validToken && <p>O token é valido!</p>}
        </div>
      )}
    </div>
  );
}

export default Login;
