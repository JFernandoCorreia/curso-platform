import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/auth/login', { email, password });
      const { success, token } = response.data; // Corrigindo a obtenção de 'success' e 'token'

      if (success) {
        localStorage.setItem('token', token);
        // Redirecionar para a página desejada após o login (por exemplo, '/cursos')
        history.push('/cursos');
      } else {
        console.log('Login falhou. Mensagem:', response.data.message);
      }
    } catch (error) {
      console.error('Erro ao realizar login:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;