import React from 'react';
import PostStyles from './Post.module.css';

const Post = (props) => {
  const {avatarSrc,authorName, message} = props;
  return (
    <div className={PostStyles.post}>
      <div className={PostStyles.post__wrapper}>
        <img width="50" height="50" className={PostStyles.post__avatar} src={avatarSrc} alt="Аватарка юзера" />
        <h3 className={PostStyles.post__name}>{authorName}</h3>
      </div>
      <p className={PostStyles.post__message}>{message}</p>
    </div>
  );
};

export default Post;
