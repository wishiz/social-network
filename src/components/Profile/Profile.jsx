import React from 'react';

import s from './Profile.module.css';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({state}) => {
    return (
      <div>
        <ProfileInfo />
        <MyPosts posts={state.posts}/>
      </div>
  )
}

export default Profile;