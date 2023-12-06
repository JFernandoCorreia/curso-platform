import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const usuarioAutenticado = localStorage.getItem('token');

  return (
    <Routes>
      <Route
        {...rest}
        element={usuarioAutenticado ? <Element /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default PrivateRoute;