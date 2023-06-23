import React from 'react';
import UserContext from '../../UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
  const { login } = React.useContext(UserContext);

  return login ? <div>Verdadeiro</div> : <Navigate to="/login" />;
};

export default ProtectedRoute;
