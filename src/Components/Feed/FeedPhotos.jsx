import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../api';

const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET();
      request(url, options);
    }
    fetchPhotos();
  }, [request]);

  return (
    <div>
      <FeedPhotosItem />
    </div>
  );
};

export default FeedPhotos;
