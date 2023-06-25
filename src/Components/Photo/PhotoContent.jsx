import React from 'react';
import styles from './PhotoContent.module.css';
import { Link } from 'react-router-dom';

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.datails}>
        <div>
          <p>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className={styles.views}></span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso}</li>
            <li>{photo.idade}</li>
            <li>{photo.peso}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PhotoContent;
