import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'afe99689-6834-4c64-afcb-5e7cd48fcea5',
  },
});

export const userApi = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then(response => response.data);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then(response => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`).then(response => response.data);
  },
  setAuthData() {
    return instance.get(`auth/me`).then(response => response.data);
  },
};

export const authApi = {
  me() {
    return instance.get(`auth/me`).then(response => response.data);
  },
};
