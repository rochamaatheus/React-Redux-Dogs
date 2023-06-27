import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../Feed/Feed';

const UserProfile = () => {
  const { user } = useParams();
  return (
    <div>
      <Feed user={user} />
    </div>
  );
};

export default UserProfile;
