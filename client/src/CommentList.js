import React from 'react';
import PropTypes from 'prop-types';

const CommentList = ({ comments }) => {
  const renderedComments = comments.map(comment => {
    let newContent;

    if (comment.status === 'approved') {
      newContent = comment.content;
    }

    if (comment.status === 'pending') {
      newContent = 'This comment is awaiting moderation';
    }

    if (comment.status === 'rejected') {
      newContent = 'This comment has been rejected';
    }

    return <li key={comment.id}>{newContent}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

CommentList.propTypes = {
  comments: PropTypes.array,
};

export default CommentList;
