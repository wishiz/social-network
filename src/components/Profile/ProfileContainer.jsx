import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/reducers/profileReducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.setUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profilePage={this.props.profilePage} />;
  }
}

let mapStateToProps = state => ({
  profilePage: state.profilePage.profile,
});

let ProfileContainerWithUrlData = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  ProfileContainerWithUrlData
);
