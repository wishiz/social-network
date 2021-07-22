import React from 'react';
import { nanoid } from 'nanoid';

import ProfileStatus from './ProfileStatus';
import Preloader from '../../common/Preloader/Preloader';

import s from './ProfileInfo.module.css';

import user_avatar from '../../../assets/images/user_avatar.png';

const ProfileInfo = ({ profilePage, status, updateUserStatus }) => {
  if (!profilePage) {
    return <Preloader />;
  } else
    return (
      <div>
        <div className={s.backgroundPhoto}>
          <img
            src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'
            alt='background'
          />
        </div>
        <div className={s.descriptionBlock}>
          <div>
            <img
              src={profilePage.photos.small || user_avatar}
              alt='user_ava'
              className={s.userAvatar}
            />
          </div>
          <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
          <p>
            <span className={s.profileInfoTitle}>Full name:</span>{' '}
            {profilePage.fullName}
          </p>
          {profilePage.lookingForAJob && <p>Looking for a job</p>}
          <div>
            <span className={s.profileInfoTitle}>Contact me:</span>
          </div>
          {Object.keys(profilePage.contacts)
            .filter((contact) => profilePage.contacts[contact])
            .map((contact) => (
              <p key={nanoid()}>
                <span className={s.profileInfoTitle}>{contact}:</span>{' '}
                {profilePage.contacts[contact]}
              </p>
            ))}
        </div>
      </div>
    );
};

export default ProfileInfo;
