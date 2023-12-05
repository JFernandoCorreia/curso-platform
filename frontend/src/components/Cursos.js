import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PrivateRoute from './PrivateRoute';

const Cursos = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const carregarCursos = async () => {
      try {
        // Obtemos o token armazenado localmente
        const token = localStorage.getItem('token');
        // Adicionamos o token aos cabeçalhos da solicitação
        const config = {
          headers: {
            'x-auth-token': token,
          },
        };

        // Fazemos a solicitação autenticada
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

export default PrivateRoute(Cursos);