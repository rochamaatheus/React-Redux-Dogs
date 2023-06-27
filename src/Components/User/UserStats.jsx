import React from 'react';
import Head from '../Helper/Head';
import useFetch from '../../Hooks/useFetch';
import { GET_STATS } from '../../api';

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const token = window.localStorage.getItem('token');
      if (!token) return;
      const { url, options } = GET_STATS(token);
      await request(url, options);
    }
  }, [request]);

  return (
    <div>
      <Head
        title="Estatísticas"
        description="Visualize duas estatísticas-chave em nosso site por meio de dois gráficos claros. Obtenha uma visão rápida e fácil do número de usuários ativos e do engajamento do site ao longo do tempo. Acompanhe o crescimento do nosso público e veja como as interações aumentam ao longo do período. Tome decisões embasadas com base nessas informações essenciais apresentadas de forma acessível"
      />
      Estatísticas
    </div>
  );
};

export default UserStats;
