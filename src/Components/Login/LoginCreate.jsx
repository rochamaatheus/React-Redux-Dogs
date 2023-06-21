import React from 'react';

const LoginCreate = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}></form>
    </section>
  );
};

export default LoginCreate;
