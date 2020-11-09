import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/reducers/profileReducer';

const MyPosts = ({ posts, dispatch, newPostText }) => {

  let postElements = posts.map(p => <Post message={p.message} likes={p.likes} />)

  let addPost = () => {
    dispatch(addPostActionCreator());
  }

  let onPostChange = (e) => {
    let text = e.target.value;
    dispatch(updateNewPostTextActionCreator(text));
  }

  return <div className={s.postsBlock}>
    <h2>My posts</h2>
    <div>
      <div>
        <textarea
          value={newPostText}
          onChange={onPostChange}>text area</textarea>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
    </div>
    <div className={s.posts}>
      {postElements}
    </div>
  </div>
}

export default MyPosts;