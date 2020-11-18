import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Header.module.css';
import headerIcon from '../../assets/icons/headerIcon.png';

const Header = ({ isAuth, login }) => {
  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <div className={s.headerLogo}>
          <img src={headerIcon} alt='logo' />
        </div>
        <div className={s.loginBlock}>
          {isAuth ? login : <NavLink to='/login'>Login</NavLink>}
        </div>
      </div>
    </header>
  );
};

export default Header;
