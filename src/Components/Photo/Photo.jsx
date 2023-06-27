import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  return <div>{id}</div>;
};

export default Photo;
