import React from 'react';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ profilePage }) => {
  return (
    <div>
      <ProfileInfo profilePage={profilePage} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
