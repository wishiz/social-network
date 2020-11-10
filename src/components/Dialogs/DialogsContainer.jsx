import React from 'react';

import Dialogs from './Dialogs';

import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/reducers/dialogsReducer';

const DialogsContainer = ({ store }) => {
    let newMessageText = store.getState().dialogsPage.newMessageText;
    let dialogs = store.getState().dialogsPage.dialogs;
    let messages = store.getState().dialogsPage.messages;

    let sendMessage = () => {
        store.dispatch(sendMessageActionCreator());
    }

    let updateNewMessageText = (text) => {
        store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return <Dialogs
        sendMessage={sendMessage}
        updateNewMessageText={updateNewMessageText}
        newMessageText={newMessageText}
        dialogs={dialogs}
        messages={messages} />
}

export default DialogsContainer;

