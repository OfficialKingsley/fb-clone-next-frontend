import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    pending: null,
    success: null,
    error: null,
  },
  reducers: {
    updateUserPending: (state) => {
      state.pending = true;
      state.success = false;
      state.error = false;
    },
    updateUserSuccess: (state) => {
      state.pending = false;
      state.success = true;
      state.error = false;
    },
    updateUserError: (state) => {
      state.pending = false;
      state.success = false;
      state.error = true;
    },
    setUser: (state, action) => {
      state.data = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    unsetUser: (state) => {
      state.data = null;
      localStorage.removeItem("user");
    },
  },
});

export const {
  updateUserPending,
  updateUserSuccess,
  updateUserError,
  setUser,
  unsetUser,
} = userSlice.actions;
export default userSlice.reducer;
