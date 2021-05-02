import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setUserProfile } from '../../redux/reducers/profileReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import Profile from './Profile';
import { compose } from 'redux';

//-------------------

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

let mapStateToProps = (state) => ({
  profilePage: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, { setUserProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
