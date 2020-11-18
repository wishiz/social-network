import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import axios from 'axios';
import { setUserProfileAC } from '../../redux/reducers/profileReducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setUserProfile(response.data);
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
