import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';

const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch();

  return (
    <div>
      <FeedPhotosItem />
    </div>
  );
};

export default FeedPhotos;
