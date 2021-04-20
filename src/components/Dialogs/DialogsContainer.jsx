import Dialogs from './Dialogs';
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/reducers/dialogsReducer';
import { connect } from 'react-redux';

let mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  };
};

let mapDispatchToProps = dispatch => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    updateNewMessageText: text => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
