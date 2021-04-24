import React from 'react';
import { connect } from 'react-redux';

import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/reducers/dialogsReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import Dialogs from './Dialogs';

//-------------------

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

const withRedirectProfile = withAuthRedirect(Dialogs);

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRedirectProfile);

export default DialogsContainer;
