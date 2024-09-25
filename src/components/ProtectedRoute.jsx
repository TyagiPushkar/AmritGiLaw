// src/components/ProtectedRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Adjust the path if necessary

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Access authentication state

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children; // Render the protected route's children
};

export default ProtectedRoute;
