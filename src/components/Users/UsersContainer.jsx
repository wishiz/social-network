import React from 'react';
import { connect } from 'react-redux';
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  toggleFetchingAC,
  toggleFollowingProgress
} from '../../redux/reducers/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import userApi from '../../api/api';

class UsersContainer extends React.Component {
  componentDidMount() {
    userApi
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then(response => {
        this.props.setUsers(response.items);
        this.props.setTotalUsersCount(response.totalCount);
      });
  }

  onChangePage = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleFetching(true);
    userApi.getUsers(pageNumber, this.props.pageSize).then(response => {
      this.props.setUsers(response.items);
      this.props.toggleFetching(false);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          users={this.props.users}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          onChangePage={this.onChangePage}
          followingInProgress={this.props.followingInProgress}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
        />
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

let mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId));
    },
    unfollow: userId => {
      dispatch(unfollowAC(userId));
    },
    setUsers: users => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: pageNumber => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: usersCount => {
      dispatch(setTotalUsersCountAC(usersCount));
    },
    toggleFetching: isFetching => {
      dispatch(toggleFetchingAC(isFetching));
    },
    toggleFollowingProgress: (isFetching, userId) => {
      dispatch(toggleFollowingProgress(isFetching, userId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
