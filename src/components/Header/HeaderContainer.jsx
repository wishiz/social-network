import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserAuthData } from '../../redux/reducers/authReducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        withCredentials: true,
      })
      .then(response => {
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data;
          this.props.setAuthUserData(id, login, email);
        }
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

let mapDispatchToProps = dispatch => ({
  setAuthUserData: (id, email, login) => {
    return dispatch(setUserAuthData(id, email, login));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
