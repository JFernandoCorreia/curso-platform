import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Curso = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    // Função para carregar a lista de cursos
    const carregarCursos = async () => {
      try {
        const response = await axios.get('/api/cursos'); // Endpoint apropriado
        setCursos(response.data);
      } catch (error) {
        console.error('Erro ao carregar cursos:', error);
      }
    };

    // Chamando a função para carregar cursos quando o componente é montado
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

export default Curso;