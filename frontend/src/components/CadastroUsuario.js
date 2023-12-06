import React, { useState } from 'react';
import axios from 'axios';

const CadastroUsuario = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCadastro = async () => {
    try {
      const response = await axios.post('/auth/register', { name, email, password });
      const { success, token } = response.data;

      if (success) {
        localStorage.setItem('token', token);
        history.push('/cursos');
      } else {
        console.log('Cadastro falhou. Mensagem:', response.data.message);
      }
    } catch (error) {
      console.error('Erro ao realizar cadastro:', error);
    }
  };

  return (
    <div>
      <h2>Cadastro de Usuário</h2>
      <form>
        <label>Nome:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="button" onClick={handleCadastro}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastroUsuario;