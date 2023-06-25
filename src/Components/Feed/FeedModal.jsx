import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../Hooks/useFetch';

const FeedModal = ({ photo }) => {
  const { data, error, loading, request } = useFetch();
  return <div className={styles.modal}>FeedModal</div>;
};

export default FeedModal;
