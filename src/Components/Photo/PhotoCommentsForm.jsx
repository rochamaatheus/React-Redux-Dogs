import React from 'react';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import useFetch from '../../Hooks/useFetch';
import { COMMENT_POST } from '../../api';

const PhotoCommentsForm = ({ id }) => {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();

  function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    request(url, options);
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
