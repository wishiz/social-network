import React from 'react';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({profilePage, addPost, updateNewPostText}) => {
    return (
      <div>
        <ProfileInfo />
        <MyPosts posts={profilePage.posts} 
        newPostText={profilePage.newPostText}
        updateNewPostText={updateNewPostText}
        addPost={addPost}/>
      </div>
  )
}

export default Profile;