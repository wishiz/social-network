import React from 'react'
import s from './Users.module.css'
import axios from 'axios';

import defaultPhoto from '../../assets/images/images.png';

class UsersClass extends React.Component {
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items);
                })
        }
    }

    render() {

        return <div>
            <button onClick={this.getUsers}>Get users</button>
            {
                this.props.users.map((u) => <div key={u.id} className={s.userBlock}>
                    <div className={s.leftBlock}>
                        <div className={s.avatar}>
                            <img src={u.photos.small != null ? u.photos.small : defaultPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { this.props.unfollow(u.id) }}>unfollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }}>follow</button>}
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
    }


export default UsersClass;