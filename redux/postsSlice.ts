import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    pending: false,
    success: true,
    error: false,
  },
  reducers: {
    getPending: (state) => {
      state.pending = true;
      state.error = false;
      state.success = false;
    },
    getSuccess: (state, action) => {
      state.pending = false;
      state.success = true;
      state.error = false;
      state.data = action.payload;
    },
    getError: (state) => {
      state.pending = false;
      state.error = true;
    },
    addPending: (state) => {
      state.pending = true;
      state.success = true;
      state.error = true;
    },
    addSuccess: (state) => {
      state.pending = false;
      state.success = true;
      state.error = false;
    },
    addError: (state) => {
      state.pending = false;
      state.error = true;
      state.success = false;
    },
  },
});

export const {
  getPending,
  getSuccess,
  getError,
  addPending,
  addSuccess,
  addError,
} = postsSlice.actions;
export default postsSlice.reducer;
