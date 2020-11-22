import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfileAC } from '../../redux/reducers/profileReducer';
import { withRouter } from 'react-router-dom';
import userApi from '../../api/api';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    userApi.getProfile(userId).then(response => {
      this.props.setUserProfile(response);
    });
  }

  render() {
    return <Profile {...this.props} profilePage={this.props.profilePage} />;
  }
}

let mapStateToProps = state => ({
  profilePage: state.profilePage.profile,
});

let mapDispatchToProps = dispatch => ({
  setUserProfile: profile => {
    return dispatch(setUserProfileAC(profile));
  },
});

let ProfileContainerWithUrlData = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainerWithUrlData);
