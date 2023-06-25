import React from 'react';
import styles from './PhotoContent.module.css';

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.datails}></div>
    </div>
  );
};

export default PhotoContent;
