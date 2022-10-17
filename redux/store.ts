import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import postsReducer from "./postsSlice";
import themeReducer from "./themeSlice";
// This is the reducer that was exported from the userSlice

const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
