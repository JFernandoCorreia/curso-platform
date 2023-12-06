import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cursos = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const carregarCursos = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            'x-auth-token': token,
          },
        };

        const response = await axios.get('/api/cursos', config);
        setCursos(response.data);
      } catch (error) {
        console.error('Erro ao carregar cursos:', error);
      }
    };

    carregarCursos();
  }, []);

  return (
    <div>
      <h2>Lista de Cursos</h2>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>
            <strong>{curso.nome}</strong> - {curso.descricao}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cursos;