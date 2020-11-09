import React from 'react';
import s from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/reducers/dialogsReducer';

const Dialogs = ({ dialogsPage, dispatch }) => {
    let sendMessage = () => {
        dispatch(sendMessageActionCreator());
    }

    let updateNewMessageText = (e) => {
        let text = e.target.value;
        dispatch(updateNewMessageTextActionCreator(text))
    }

    let newMessageText = dialogsPage.newMessageText;

    return (
        <>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsPage.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />)}
                </div>

                <div>
                    <div className={s.messages}>
                        {dialogsPage.messages.map((message) => <Message message={message.message} />)}
                    </div>
                    <textarea
                        value={newMessageText}
                        className={s.newMessageField}
                        onChange={updateNewMessageText}></textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </>
    )
}

export default Dialogs;

