import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = React.useContext('');
  const [password, setPassword] = React.useContext('');

  return (
    <section>
      <h1>Login</h1>
      <form action="">
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Entrar</button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
      <Link to="/login/perdeu">Perdeu</Link>
      <Link to="/login/resetar">Resetar</Link>
    </section>
  );
};

export default LoginForm;
