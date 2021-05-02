import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
