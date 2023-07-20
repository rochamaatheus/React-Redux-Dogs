import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { data } = useSelector((state) => state.user);

  if (data) return children;
  else if (data === null) return <Navigate to="/login" />;
  else return null;
};

export default ProtectedRoute;
