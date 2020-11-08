import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = ({posts, addPost, updateNewPostText, newPostText}) => {

  let postElements = posts.map(p => <Post message={p.message} likes={p.likes}/>)

  let newPost = React.createRef()

  let handleClick = () => {
    addPost();
  }

  let onPostChange = () => {
    let text = newPost.current.value;
    updateNewPostText(text);
    newPost.current.value = '';
  }

    return <div className={s.postsBLock}>
    <h2>My posts</h2>
    <div>
      <div>
        <textarea ref={newPost} value={newPostText} onChange={onPostChange}>text area</textarea>
      </div>
      <div>
        <button onClick={handleClick}>Add post</button>
      </div>
    </div>
    <div className={s.posts}>
      {postElements}
    </div>
  </div>
}

export default MyPosts;