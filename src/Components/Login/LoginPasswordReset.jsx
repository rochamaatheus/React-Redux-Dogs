import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm('password');

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <p>{login}</p>
      <p>{key}</p>
      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="password" name="password" />
        <Button>Resetar</Button>
      </form>
    </div>
  );
};

export default LoginPasswordReset;
