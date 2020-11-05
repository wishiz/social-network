import React from 'react';
import s from './Navbar.module.css';
console.log(s);
// let s = {
//     'nav': 'Navbar_nav__3ou9Q',
//     'item': 'Navbar_item__3qaF3',
//     'active' : 'Baksndakdn_actve'
 // }

let c1 = "item";
let c2 = "active";
// "item active"
let classes = c1 + " " + c2;
let classesNew = `${s.item} ${c2}`;


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <a href="/profile" >Profile</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a href="/dialogs" >Messages</a>
        </div>
        <div className={s.item}>
            <a href="/news">News</a>
        </div>
        <div className={s.item}>
            <a href="/music">Music</a>
        </div>
        <div className={s.item}>
            <a href="/settings">Settings</a>
        </div>
    </nav>
}

export default Navbar;