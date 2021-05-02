import React, { useState } from 'react';

import s from './ProfileInfo.module.css';

const ProfileStatus = ({ status }) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <div>
      {!editMode && (
        <div>
          <p onDoubleClick={() => setEditMode(true)}>{status}</p>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus
            onBlur={() => setEditMode(false)}
            value={status}
            className={s.statusInput}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
