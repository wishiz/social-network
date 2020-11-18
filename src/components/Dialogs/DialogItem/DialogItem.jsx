import React from 'react';
import s from '../Dialogs.module.css';

import { NavLink } from 'react-router-dom';

const DialogItem = ({ name, id, img }) => {
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
      <div className={s.avatar}>
        <img src={img} alt='avatar' />
      </div>
    </div>
  );
};

export default DialogItem;
