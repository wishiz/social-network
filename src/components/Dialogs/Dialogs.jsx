import React from 'react';
import s from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = ({state}) => {
    let newMessage = React.createRef()
    let sendMessage = () => {
        let message = newMessage.current.value;
        alert(message);
    }

    return (
        <>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img}/>)}
                </div>

                <div>
                    <div className={s.messages}>
                        {state.messages.map((message) => <Message message={message.message}/>)}
                    </div>
                    <textarea ref={newMessage} className={s.newMessageField}></textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </>
    )
}

export default Dialogs;

