import React from 'react';

const Logout = ({ history }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    // Redirecionar para a página de login após o logout
    history.push('/login');
  };

  return (
    <div>
      <h2>Logout</h2>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;