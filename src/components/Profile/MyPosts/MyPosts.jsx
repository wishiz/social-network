import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    return <div>
    My posts
    <div>
      <textarea>text area</textarea>
      <button>Add post</button>
      <button>Remove post</button>
    </div>
    <div className={s.posts}>
      <Post message="Hi, how are you?" likes={2}/>
      <Post message="My first post here." likes={7}/>
    </div>
  </div>
}

export default MyPosts;