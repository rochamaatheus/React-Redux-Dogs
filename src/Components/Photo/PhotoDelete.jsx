import React from 'react';
import styles from './PhotoDelete.module.css';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const token = window.localStorage.getItem('token');
    if (!token) return;
    const { url, options } = PHOTO_DELETE(id, token);
    const { response } = await request(url, options);
    if (response.ok) window.location.reload();
  }

  return (
    <button onClick={handleClick} className={styles.delete}>
      Deletar
    </button>
  );
};

export default PhotoDelete;
