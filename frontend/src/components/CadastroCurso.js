import React, { useState } from 'react';
import CursoForm from './CursoForm';
import axios from 'axios';

const CadastroCurso = ({ history }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleCadastro = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'x-auth-token': token,
        },
      };
      if (!nome || !descricao) {
        console.error('Por favor, preencha todos os campos.');
        return;
      }

      const response = await axios.post(
        '/api/cursos',
        { nome, descricao },
        config
      );

      console.log('Curso cadastrado com sucesso:', response.data.curso);

    } catch (error) {
      console.error('Erro ao cadastrar curso:', error);
    }
  };

  return (
    <div>
      <h2>Cadastro de Curso</h2>
      <CursoForm onSubmit={handleCadastro} />
    </div>
  );
};

export default CadastroCurso;