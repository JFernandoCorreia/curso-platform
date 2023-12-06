import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/auth/login', { email, password });
      const { success, token } = response.data;

      if (success) {
        localStorage.setItem('token', token);
        history.push('/cursos');
      } else {
        setFeedback(`Login falhou. Mensagem: ${message}`);
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
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      {feedback && <p>{feedback}</p>}
    </div>
  );
};

export default Login;