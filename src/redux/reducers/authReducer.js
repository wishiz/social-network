import { authApi } from '../../api/api';

const SET_AUTH = 'SET_AUTH';

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, ...action.data, isAuth: true };
    default:
      return state;
  }
};

export const setUserAuthData = (userId, login, email) => ({
  type: SET_AUTH,
  data: { userId, login, email },
});

export const setAuthData = () => {
  return dispatch => {
    authApi.me().then(response => {
      if (response.resultCode === 0) {
        let { id, login, email } = response.data;
        dispatch(setUserAuthData(id, login, email));
      }
    });
  };
};
export default authReducer;
