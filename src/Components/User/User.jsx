import React from 'react';
import UserHeader from './UserHeader';
import { Route, Routes } from 'react-router-dom';

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
      </Routes>
    </section>
  );
};

export default User;
