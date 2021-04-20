import { userApi } from '../../api/api';

const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 50,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.usersCount,
      };
    case TOGGLE_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFollowing
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId),
      };
    default:
      return state;
  }
};

export const setUsers = users => ({ type: SET_USERS, users });
export const followSuccess = userId => ({ type: FOLLOW, userId: userId });
export const unfollowSuccess = userId => ({ type: UNFOLLOW, userId: userId });
export const setCurrentPage = page => ({ type: SET_CURRENT_PAGE, page });
export const setTotalUsersCount = usersCount => ({
  type: SET_TOTAL_USERS_COUNT,
  usersCount,
});
export const toggleFetching = isFetching => ({
  type: TOGGLE_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFollowing, userId) => ({
  type: TOGGLE_FOLLOWING_PROGRESS,
  isFollowing,
  userId,
});

export const getUsers = (currentPage, pageSize) => {
  return dispatch => {
    userApi.getUsers(currentPage, pageSize).then(response => {
      dispatch(setUsers(response.items));
      dispatch(setTotalUsersCount(response.totalCount));
    });
  };
};

export const onChangePage = (pageNumber, pageSize) => {
  return dispatch => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleFetching(true));
    userApi.getUsers(pageNumber, pageSize).then(response => {
      dispatch(setUsers(response.items));
      dispatch(toggleFetching(false));
    });
  };
};

export const unfollow = userId => {
  return dispatch => {
    dispatch(toggleFollowingProgress(true, userId));
    userApi.unfollow(userId).then(response => {
      if (response.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export const follow = userId => {
  return dispatch => {
    dispatch(toggleFollowingProgress(true, userId));
    userApi.follow(userId).then(response => {
      if (response.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export default usersReducer;
