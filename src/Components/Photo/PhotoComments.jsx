import React from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';

const PhotoComments = ({ id, comments }) => {
  const { login } = React.useContext(UserContext);

  return <div>{login && <PhotoCommentsForm />}</div>;
};

export default PhotoComments;
