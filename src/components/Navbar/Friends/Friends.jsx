import React from 'react';
import s from './Friends.module.css';

const Friends = ({friends}) => {
    return (
    <div>
        <h3 className={s.title}>Friends</h3>
        <div className={s.friendsBlock}>
            {friends.map((friend) => (
            <div className={s.friendsItem}>
                <div className={s.circle}></div>
                <p className={s.name}>{friend.name}</p>
            </div>))}
        </div>
    </div>
    )
}

export default Friends;