import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import './App.css';
import Cursos from './components/Cursos';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import CadastroUsuario from './components/CadastroUsuario';

const App = () => {
  return (
    <Router>
      <div className="App container">
        <h1>Sistema de Cursos</h1>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/cadastrar-usuario">Cadastrar Usuário</Link>
            </li>
            <li>
              <Link to="/cursos">Cursos</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar-usuario/*" element={<PrivateRoute element={<CadastroUsuario />} />} />
          <Route path="/cursos/*" element={<PrivateRoute element={<Cursos />} />} />
        </Routes>
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
};

export default App;