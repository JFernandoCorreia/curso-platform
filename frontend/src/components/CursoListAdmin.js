import React from 'react';

import React from 'react';
import axios from 'axios';

const CursoListAdmin = ({ cursos }) => {
  const handleEditar = (cursoId) => {
    console.log(`Editar curso com ID ${cursoId}`);
  };

  const handleDesativar = async (cursoId) => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'x-auth-token': token,
        },
      };

      await axios.put(`/api/cursos/admin/${cursoId}/desativar`, {}, config);

      const updatedCursos = cursos.map((curso) => {
        if (curso.id === cursoId) {
          return { ...curso, ativo: false };
        }
        return curso;
      });

      setCursos(updatedCursos);
      console.log(`Curso com ID ${cursoId} desativado com sucesso`);
    } catch (error) {
      console.error('Erro ao desativar curso:', error);
    }
  };
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome do Curso</th>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {cursos.map((curso) => (
          <tr key={curso.id}>
            <td>{curso.id}</td>
            <td>{curso.nome}</td>
            <td>{curso.descricao}</td>
            <td>
              <button onClick={() => handleEditar(curso.id)}>Editar</button>
              <button onClick={() => handleDesativar(curso.id)}>Desativar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CursoListAdmin;