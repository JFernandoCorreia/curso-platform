import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CursoListAdmin from './CursoListAdmin';

const DashboardAdmin = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    // Realize uma solicitação ao backend para obter a lista completa de cursos
    const fetchCursos = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            'x-auth-token': token,
          },
        };
        const handleEditar = (cursoId) => {
          // Implemente a navegação para a página de edição ou utilize um modal
          console.log(`Editar curso com ID ${cursoId}`);
        };
      
        const handleDesativar = (cursoId) => {
          // Implemente a lógica para desativar o curso no backend
          console.log(`Desativar curso com ID ${cursoId}`);
        };

        const response = await axios.get('/api/cursos', config);
        setCursos(response.data);
      } catch (error) {
        console.error('Erro ao carregar cursos:', error);
      }
    };

    fetchCursos();
  }, []);

  return (
    <div>
      <h2>Dashboard do Administrador</h2>
      <CursoListAdmin cursos={cursos} />
    </div>
  );
};

export default DashboardAdmin;