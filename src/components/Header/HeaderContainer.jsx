import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import userApi from '../../api/api'
import { setAuthData } from '../../redux/reducers/authReducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setAuthData()
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthData })(HeaderContainer);
