// src/App.js
import React, { useState } from 'react';
import Login from '../components/Login';
import Classes from './Classes';

function Auth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <Classes />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default Auth;
