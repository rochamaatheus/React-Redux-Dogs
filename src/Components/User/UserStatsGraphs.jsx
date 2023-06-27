import React from 'react';
import styles from './UserStatsGraphs.module.css';

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  return (
    <section className={`${styles.graph} animeLeft`}>UserStatsGraphs</section>
  );
};

export default UserStatsGraphs;
