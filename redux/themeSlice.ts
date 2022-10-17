import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    pending: false,
    error: false,
    success: true,
    data: "light",
  },
  reducers: {
    themeUpdatePending: (state) => {
      state.pending = true;
      state.error = false;
      state.success = false;
    },
    themeUpdateError: (state) => {
      state.pending = false;
      state.error = true;
      state.success = false;
    },
    themeUpdateSuccess: (state) => {
      state.pending = false;
      state.error = false;
      state.success = true;
    },
    setTheme: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {
  themeUpdatePending,
  themeUpdateError,
  themeUpdateSuccess,
  setTheme,
} = themeSlice.actions;
export default themeSlice.reducer;
