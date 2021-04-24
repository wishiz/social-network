import React from 'react';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import s from './Dialogs.module.css';

//-------------------

const Dialogs = ({
  sendMessage,
  updateNewMessageText,
  dialogsPage,
  isAuth,
}) => {
  let dialogsElements = dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} img={d.img} />
  ));
  let messagesElements = dialogsPage.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let onSendMessage = () => {
    sendMessage();
  };

  let onUpdateNewMessageText = (e) => {
    let text = e.target.value;
    updateNewMessageText(text);
  };

  return (
    <>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>

        <div>
          <div className={s.messages}>{messagesElements}</div>
          <textarea
            value={dialogsPage.newMessageText}
            className={s.newMessageField}
            onChange={onUpdateNewMessageText}
          ></textarea>
          <button onClick={onSendMessage}>Send</button>
        </div>
      </div>
    </>
  );
};

export default Dialogs;
