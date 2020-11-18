import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ addPost, updateNewPostText, profilePage }) => {
  let postElements = profilePage.posts.map(p => (
    <Post message={p.message} likes={p.likes} key={p.id} />
  ));

  let onAddPost = () => {
    addPost();
  };

  let onPostChange = e => {
    let text = e.target.value;
    updateNewPostText(text);
  };

  return (
    <div className={s.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea value={profilePage.newPostText} onChange={onPostChange}>
            text area
          </textarea>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
