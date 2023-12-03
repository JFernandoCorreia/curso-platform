import React, { useState } from 'react';
import axios from 'axios';

const CursoForm = ({ onSubmit }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'x-auth-token': token,
        },
      };

      // Faz a solicitação para criar um novo curso
      const response = await axios.post(
        '/api/cursos',
        { nome, descricao },
        config
      );

      onSubmit(response.data.curso);
    } catch (error) {
      console.error('Erro ao cadastrar curso:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome:</label>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <br />
      <label>Descrição:</label>
      <textarea
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <br />
      <button type="submit">Cadastrar Curso</button>
    </form>
  );
};

export default CursoForm;