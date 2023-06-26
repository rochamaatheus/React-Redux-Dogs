import React from 'react';
import styles from './PhotoDelete.module.css';
import { PHOTO_DELETE } from '../../api';

const PhotoDelete = ({ id }) => {
  function handleClick(event) {
    event.preventDefault();
    const token = window.localStorage.getItem('token');
    if (!token) return;
    const { url, options } = PHOTO_DELETE(id, token);
  }

  return (
    <button onClick={handleClick} className={styles.delete}>
      Deletar
    </button>
  );
};

export default PhotoDelete;
