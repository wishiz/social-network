import { profileApi } from '../../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likes: 2 },
    { id: 2, message: 'My first post here.', likes: 7 },
    { id: 3, message: 'Blah blah', likes: 5 },
    { id: 4, message: 'Hey-ho, lets go', likes: 15 },
    { id: 5, message: 'Hello world', likes: 47 },
    { id: 6, message: 'Cmon everyone', likes: 65 },
    { id: 7, message: 'Thats me', likes: 147 },
    { id: 8, message: 'Thank you for feedback', likes: 200 },
  ],
  newPostText: '',
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: 9, message: state.newPostText, likes: 0 },
        ],
        newPostText: '',
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText,
});
export const setUserProfileSuccess = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setUserStatus = (status) => ({ type: SET_STATUS, status });

export const setUserProfile = (userId) => {
  return (dispatch) => {
    profileApi.getProfile(userId).then((response) => {
      dispatch(setUserProfileSuccess(response));
    });
  };
};

export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileApi.getUserStatus(userId).then((response) => {
      dispatch(setUserStatus(response));
    });
  };
};

export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileApi.updateUserStatus(status).then((response) => {
      if (response.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    });
  };
};

export default profileReducer;
