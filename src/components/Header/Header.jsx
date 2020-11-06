import React from 'react';
import s from './Header.module.css';

import headerIcon from '../../assets/icons/headerIcon.png'

const Header = () => {
    return <header className={s.header}>
        <img src={headerIcon} />
    </header>
}

export default Header;