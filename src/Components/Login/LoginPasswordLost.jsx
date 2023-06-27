import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';

const LoginPasswordLost = () => {
  const email = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = {};
    request(url, options);
  }

  return (
    <section onSubmit={handleSubmit}>
      <h1 className="title">Perdeu a senha?</h1>
      <form>
        <Input label="Email / Usuário" type="text" name="email" {...email} />
        <Button>Enviar Email</Button>
      </form>
    </section>
  );
};

export default LoginPasswordLost;
