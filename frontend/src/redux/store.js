import { createSlice, configureStore } from "@reduxjs/toolkit";
//slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
  },
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});
export const authActions = authSlice.actions;
//create store
export const store = configureStore({
  reducer: authSlice.reducer,
});