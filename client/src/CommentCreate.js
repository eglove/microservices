import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState('');

  const onSubmit = async event => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="comment">
            New Comment
            <input
              id="comment"
              value={content}
              onChange={e => setContent(e.target.value)}
              className="form-control"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

CommentCreate.propTypes = {
  postId: PropTypes.string,
};

export default CommentCreate;
