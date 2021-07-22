import React from 'react';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ profilePage, status, updateUserStatus }) => {
  return (
    <div>
      <ProfileInfo
        profilePage={profilePage}
        status={status}
        updateUserStatus={updateUserStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
