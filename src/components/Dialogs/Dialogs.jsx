import React from 'react';
import s from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = ({ sendMessage, updateNewMessageText, newMessageText, dialogs, messages }) => {
    let onSendMessage = () => {
        sendMessage();
    }

    let onUpdateNewMessageText = (e) => {
        let text = e.target.value;
        updateNewMessageText(text);
    }

    return (
        <>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />)}
                </div>

                <div>
                    <div className={s.messages}>
                        {messages.map((message) => <Message message={message.message} />)}
                    </div>
                    <textarea
                        value={newMessageText}
                        className={s.newMessageField}
                        onChange={onUpdateNewMessageText}></textarea>
                    <button onClick={onSendMessage}>Send</button>
                </div>
            </div>
        </>
    )
}

export default Dialogs;

