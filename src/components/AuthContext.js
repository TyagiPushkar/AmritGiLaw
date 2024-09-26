// src/components/AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [adminId, setAdminId] = useState(() => localStorage.getItem('admin_id')); // Get the initial state from localStorage

  const login = (id) => {
    setAdminId(id);
    localStorage.setItem('admin_id', id); // Save admin_id to localStorage
  };

  const logout = () => {
    setAdminId(null);
    localStorage.removeItem('admin_id'); // Remove admin_id from localStorage
  };

  useEffect(() => {
    const storedId = localStorage.getItem('admin_id');
    if (storedId) {
      setAdminId(storedId); // Restore admin_id from localStorage on mount
    }
  }, []);

  return (
    <AuthContext.Provider value={{ adminId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
