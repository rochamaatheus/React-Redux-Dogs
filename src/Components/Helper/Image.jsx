import React from 'react';
import styles from './Image.module.css';

const Image = ({ alt, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.skeleton}></div>
      <img className={styles.img} src="" alt="" />
    </div>
  );
};

export default Image;
