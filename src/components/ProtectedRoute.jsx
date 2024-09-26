// src/components/ProtectedRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { adminId } = useAuth();

  return adminId ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
