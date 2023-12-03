import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const usuarioAutenticado = true; // Adicione aqui a lógica de verificação de autenticação

  return (
    <Route
      {...rest}
      render={(props) =>
        usuarioAutenticado ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;