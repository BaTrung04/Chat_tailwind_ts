import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: string;
  username: string;
  img_avatar_url?: string;
  accessToken: string;
}
interface LoginState {
  login: {
    currentUser: null;
    isFetching: boolean;
    error: boolean;
    isLogin: boolean;
  };
}

const initialState = {
  login: {
    currentUser: null,
    isFetching: false,
    error: false,
    isLogin: false,
  },
} satisfies LoginState as LoginState;

const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //login
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.isLogin = true;
      state.login.error = false;
    },
    loginFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
    //Logout
    logOutStart: (state) => {
      state.login.isFetching = true;
    },
    logOutSuccess: (state) => {
      state.login.isFetching = false;
      state.login.currentUser = null;
      //  storage.removeItem(`persist:${persistConfig.key}`);
      state.login.isLogin = false;
      state.login.error = false;
    },
    logOutFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
    //turn-on
    // turnOnOffAuth: (state, action) => {
    //   state.login.currentUser = {
    //     ...state.login.currentUser,
    //     accessToken: action.payload.accessToken,
    //     // Thêm các trường khác của currentUser tại đây
    //   };
    // },
    // uploadAvatar: (state, action) => {
    //   if (state.login.currentUser) {
    //     state.login.currentUser.user.img_avatar_url = action.payload;
    //   }
    // },
    // uploadBackground: (state, action) => {
    //   if (state.login.currentUser) {
    //     state.login.currentUser.user.img_background_url = action.payload;
    //   }
    // },
  },
});
const { actions, reducer } = authSlice;
export const {
  loginStart,
  loginFailed,
  loginSuccess,
  logOutStart,
  logOutSuccess,
  logOutFailed,
} = actions;
export default reducer;
