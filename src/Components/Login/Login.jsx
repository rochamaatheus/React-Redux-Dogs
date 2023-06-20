import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </div>
  );
};

export default Login;
