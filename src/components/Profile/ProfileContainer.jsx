import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/reducers/profileReducer';
import { Redirect, withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.setUserProfile(userId);
  }

  render() {
    if (!this.props.isAuth) return <Redirect to='/login' />;
    return <Profile {...this.props} profilePage={this.props.profilePage} />;
  }
}

let mapStateToProps = state => ({
  profilePage: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

let ProfileContainerWithUrlData = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  ProfileContainerWithUrlData
);
