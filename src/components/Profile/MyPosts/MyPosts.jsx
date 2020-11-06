import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = ({posts}) => {

  let postElements = posts.map(p => <Post message={p.message} likes={p.likes}/>)

    return <div className={s.postsBLock}>
    <h2>My posts</h2>
    <div>
      <div>
        <textarea>text area</textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </div>
    <div className={s.posts}>
      {postElements}
    </div>
  </div>
}

export default MyPosts;