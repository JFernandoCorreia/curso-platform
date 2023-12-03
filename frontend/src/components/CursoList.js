import React from 'react';

const CursoList = ({ cursos, onDelete }) => {
  return (
    <ul>
      {cursos.map((curso) => (
        <li key={curso.id}>
          <strong>{curso.nome}</strong> - {curso.descricao}{' '}
          <button onClick={() => onDelete(curso.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
};

export default CursoList;