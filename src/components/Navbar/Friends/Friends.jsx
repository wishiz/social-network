import React from 'react';
import s from './Friends.module.css';

const Friends = ({ friends }) => {
  let friendsElements = friends.map(f => (
    <div className={s.friendsItem} key={f.id}>
      <div className={s.circle}></div>
      <p className={s.name}>{f.name}</p>
    </div>
  ));

  return (
    <div>
      <h3 className={s.title}>Friends</h3>
      <div className={s.friendsBlock}>{friendsElements}</div>
    </div>
  );
};

export default Friends;
