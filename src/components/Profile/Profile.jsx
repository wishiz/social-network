import React from 'react';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({profilePage, dispatch}) => {
    return (
      <div>
        <ProfileInfo />
        <MyPosts posts={profilePage.posts} 
        newPostText={profilePage.newPostText}
        dispatch={dispatch} />
      </div>
  )
}

export default Profile;