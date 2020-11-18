import React from 'react';
import s from './Users.module.css';
import defaultPhoto from '../../assets/images/images.png';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import axios from 'axios';

const Users = ({
  users,
  totalUsersCount,
  pageSize,
  currentPage,
  unfollow,
  follow,
  onChangePage,
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
                  onClick={() => {
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            'API-KEY': 'afe99689-6834-4c64-afcb-5e7cd48fcea5',
                          },
                        }
                      )
                      .then(response => {
                        if (response.data.resultCode === 0) {
                          unfollow(u.id);
                        }
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            'API-KEY': 'afe99689-6834-4c64-afcb-5e7cd48fcea5',
                          },
                        }
                      )
                      .then(response => {
                        if (response.data.resultCode === 0) {
                          follow(u.id);
                        }
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
