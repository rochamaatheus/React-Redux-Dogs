import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div>
      <Link to="/login/criar">Cadastro</Link>
      <Link to="/login/perdeu">Perdeu</Link>
      <Link to="/login/resetar">Resetar</Link>
    </div>
  );
};

export default LoginForm;
