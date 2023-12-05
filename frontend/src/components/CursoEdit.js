import React, { useState } from 'react';
import axios from 'axios';

const CursoEdit = ({ curso, onUpdate }) => {
  const [descricao, setDescricao] = useState(curso.descricao);

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'x-auth-token': token,
        },
      };

      const response = await axios.put(
        `/api/cursos/${curso.id}/editar`,
        { descricao },
        config
      );

      onUpdate(response.data.curso);
    } catch (error) {
      console.error('Erro ao editar curso:', error);
    }
  };

  return (
    <div>
      <h3>Editar Curso</h3>
      <textarea
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <br />
      <button onClick={handleUpdate}>Salvar</button>
    </div>
  );
};

export default CursoEdit;