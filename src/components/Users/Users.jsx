import React from 'react';
import s from './Users.module.css';
import defaultPhoto from '../../assets/images/images.png';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import userApi from '../../api/api';

const Users = ({
  users,
  totalUsersCount,
  pageSize,
  currentPage,
  unfollow,
  follow,
  onChangePage,
  followingInProgress,
  toggleFollowingProgress,
}) => {
  const usersPageCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= usersPageCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map(p => {
          return (
            <span
              className={
                p === currentPage
                  ? s.activePageNumber + ' ' + s.pageNumber
                  : s.pageNumber
              }
              onClick={() => onChangePage(p)}
              key={nanoid()}
            >
              {p}
            </span>
          );
        })}
      </div>
      {users.map(u => (
        <div key={u.id} className={s.userBlock}>
          <div className={s.leftBlock}>
            <NavLink to={'/profile/' + u.id}>
              <div className={s.avatar}>
                <img
                  src={u.photos.small != null ? u.photos.small : defaultPhoto}
                  alt='user_avatar'
                />
              </div>
            </NavLink>
            <div>
              {u.followed ? (
                <button
                  disabled={followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    toggleFollowingProgress(true, u.id);
                    userApi.unFollow(u.id).then(response => {
                      if (response.resultCode === 0) {
                        unfollow(u.id);
                      }
                      toggleFollowingProgress(false, u.id);
                    });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    toggleFollowingProgress(true, u.id);
                    userApi.follow(u.id).then(response => {
                      if (response.resultCode === 0) {
                        follow(u.id);
                      }
                      toggleFollowingProgress(false, u.id);
                    });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div className={s.rightBlock}>
            <div>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </div>
            <div className={s.location}>
              <div>{'u.location.country'},</div>
              <div>{'u.location.city'}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
