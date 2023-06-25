import React from 'react';

const PhotoCommentsForm = ({ id }) => {
  const [comment, setComment] = React.useState('');

  return (
    <form>
      <textarea
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
    </form>
  );
};

export default PhotoCommentsForm;
