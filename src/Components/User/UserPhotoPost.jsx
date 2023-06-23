import React from 'react';
import styles from './UserPhotoPost.module.css';

const UserPhotoPost = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}></form>
    </section>
  );
};

export default UserPhotoPost;
