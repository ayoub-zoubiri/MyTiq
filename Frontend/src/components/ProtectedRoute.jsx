import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, roles = [] }) => {
  const { user, token, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>;
  }

  if (!token) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  if (roles.length > 0 && user) {
      // Check if user has one of the required roles.
      // Assuming user.role is a string (e.g., 'admin', 'user').
      // Adjust logic if user.roles is an array.
      const userRole = user.role || 'user'; // Default to user if role is missing
      if (!roles.includes(userRole)) {
          // User is authenticated but doesn't have permission
          return <Navigate to="/" replace />;
      }
  }

  return children;
};

export default ProtectedRoute;
