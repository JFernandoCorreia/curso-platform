import React from 'react';
import CursoForm from './CursoForm';

const CadastroCurso = () => {
  const handleSubmit = (event, data) => {
    event.preventDefault();
    // Adicione a lógica para enviar os dados para o backend aqui
    console.log('Dados do formulário:', data);
  };

  return (
    <div>
      <h2>Cadastro de Curso</h2>
      <CursoForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default CadastroCurso;