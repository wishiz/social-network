import React from 'react'
import s from './Users.module.css'
import axios from 'axios';

import defaultPhoto from '../../assets/images/images.png';

const Users = ({ users, follow, unfollow, setUsers }) => {
    let getUsers = () => {
        if (users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    setUsers(response.data.items);
                })
        }
    }

    return <div>
        <button onClick={getUsers}>Get users</button>
        {
            users.map((u) => <div key={u.id} className={s.userBlock}>
                <div className={s.leftBlock}>
                    <div className={s.avatar}>
                        <img src={u.photos.small != null ? u.photos.small : defaultPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { unfollow(u.id) }}>unfollow</button>
                            : <button onClick={() => { follow(u.id) }}>follow</button>}
                    </div>
                </div>
                <div className={s.rightBlock}>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div className={s.location}>
                        <div>{"u.location.country"},</div>
                        <div>{"u.location.city"}</div>
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users;