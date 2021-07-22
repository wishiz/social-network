import React, { useState } from 'react';

import s from './ProfileInfo.module.css';

const ProfileStatus = ({ status, updateUserStatus }) => {
  const [editMode, setEditMode] = useState(false);
  const [localStatus, setLocalStatus] = useState(status);

  const onStatusChange = (e) => {
    setLocalStatus(e.currentTarget.value);
  };

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
            onBlur={() => {
              updateUserStatus(localStatus);
              setEditMode(false);
            }}
            value={localStatus}
            onChange={onStatusChange}
            className={s.statusInput}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
