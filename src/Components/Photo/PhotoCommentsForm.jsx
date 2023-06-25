import React from 'react';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import useFetch from '../../Hooks/useFetch';

const PhotoCommentsForm = ({ id }) => {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        id="comment"
        name="comment"
        placeholder="Digite um comentário"
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <Enviar />
      </button>
    </form>
  );
};

export default PhotoCommentsForm;
