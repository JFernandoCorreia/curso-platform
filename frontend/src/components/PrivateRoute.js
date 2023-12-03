import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const usuarioAutenticado = localStorage.getItem('token');

  return (
    <Route
      {...rest}
      element={usuarioAutenticado ? <Component /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;