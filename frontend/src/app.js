import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Cursos from './components/Cursos';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <div className="App container">
        <h1>Sistema de Cursos</h1>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cursos" element={<PrivateRoute />} />
        </Routes>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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