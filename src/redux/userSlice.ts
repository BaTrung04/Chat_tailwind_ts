import { createSlice } from "@reduxjs/toolkit";

interface LoginState {
  login: {
    currentUser: null;
    isFetching: boolean;
    error: boolean;
    isLogin: boolean;
    success: boolean;
  };
}
const initialState = {
  login: {
    currentUser: null,
    isFetching: false,
    error: false,
    isLogin: false,
    success: false,
  },
} satisfies LoginState as LoginState;

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    //register
    registerStart: (state) => {
      state.login.isFetching = true;
    },
    registerSuccess: (state) => {
      state.login.isFetching = false;
      state.login.error = false;
      state.login.success = true;
    },
    registerFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
      state.login.success = false;
    },
  },
});

const { actions, reducer } = userSlice;
export const { registerStart, registerSuccess, registerFailed } = actions;
export default reducer;
