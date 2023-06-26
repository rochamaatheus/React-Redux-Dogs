import React from 'react';
import styles from './FeedPhotosItem.module.css';
import FormattedNumber from '../Helper/FormattedNumber';
import Image from '../Helper/Image';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <span>
        <FormattedNumber number={photo.acessos} />
      </span>
    </li>
  );
};

export default FeedPhotosItem;
