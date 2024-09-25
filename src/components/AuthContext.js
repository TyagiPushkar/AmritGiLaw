// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminId, setAdminId] = useState(null);

  const login = (id) => {
    setIsAuthenticated(true);
    setAdminId(id);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setAdminId(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, adminId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
