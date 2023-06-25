import React from 'react';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';

const PhotoCommentsForm = ({ id }) => {
  const [comment, setComment] = React.useState('');

  return (
    <form>
      <textarea
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <Enviar />
      </button>
    </form>
  );
};

export default PhotoCommentsForm;
