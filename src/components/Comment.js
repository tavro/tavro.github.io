import React from 'react';

function Comment({ username, date, content }) {
  return (
    <div className="comment">
      <p className="comment-username">{username} <span className="comment-date">{new Date(date).toLocaleDateString()}</span></p>
      <p className="comment-content">{content}</p>
    </div>
  );
}

export default Comment;
