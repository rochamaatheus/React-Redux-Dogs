import React from 'react';
import { useParams } from 'react-router-dom';

const Photo = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default Photo;
