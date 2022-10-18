import axios from "axios";
import { NextRouter } from "next/router";
const backendApiUrl = "http://localhost:8000/api";

import {
  getPending,
  getSuccess,
  getError,
  addPending,
  addSuccess,
  addError,
} from "./postsSlice";
import {
  setTheme,
  themeUpdateError,
  themeUpdatePending,
  themeUpdateSuccess,
} from "./themeSlice";

import {
  setUser,
  unsetUser,
  updateUserError,
  updateUserPending,
  updateUserSuccess,
} from "./userSlice";

export const getPosts = async (dispatch: Function) => {
  dispatch(getPending());
  const res = await axios.get(`${backendApiUrl}/posts/`);
  try {
    const data = await res.data;
    dispatch(getSuccess(data));
  } catch (err) {
    dispatch(getError());
  }
};

export const getUser = async (dispatch: Function) => {
  dispatch(updateUserPending());
  dispatch(themeUpdatePending());
  let user = JSON.parse(localStorage.getItem("user"));
  if (user?.id) {
    dispatch(setUser(user));
    dispatch(setTheme(user?.theme));
    dispatch(themeUpdateSuccess());
    dispatch(updateUserSuccess());
    return user;
  } else {
    dispatch(updateUserError());
    dispatch(themeUpdateError());
  }
};

export const loginUser = async (
  dispatch: Function,
  loginData: { email: String; password: String }
) => {
  const res = await axios.post(
    `${backendApiUrl}/users/login/`,
    JSON.stringify(loginData),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  try {
    const data = await res.data;
    if (data?.id) {
      const user = data;
      dispatch(setUser(user));
      dispatch(updateUserSuccess());
      return true;
    }
  } catch (error) {
    dispatch(updateUserError());
    return true;
  }
};

export const logoutUser = async (dispatch: Function, id: Number | String) => {
  dispatch(updateUserPending());
  const res = await axios.post(`${backendApiUrl}/users/${id}/logout/`);
  dispatch(unsetUser());
  dispatch(setTheme("light"));
  dispatch(updateUserSuccess());
};

export const sendPost = async (postData: FormData, dispatch: Function) => {
  const res = await axios.post(`${backendApiUrl}/posts/`, postData);
  dispatch(addPending());
  try {
    dispatch(addSuccess());
    await getPosts(dispatch);
  } catch (err) {
    dispatch(addError());
  }
};

export const registerUser = async (userData: FormData, dispatch: Function) => {
  const res = await axios.post(`${backendApiUrl}/users/register/`, userData);
  dispatch(addPending());
  try {
    dispatch(addSuccess());
    return res.data;
  } catch (err) {
    dispatch(addError());
    return err;
  }
};

export const getProfile = async (id: Number | String) => {
  const res = await axios.get(`${backendApiUrl}/users/${id}/`);
  try {
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};
export const getFriends = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  let friendsArray = [];
  const setFriendsArray = (item) => {
    friendsArray = [...friendsArray, item];
  };
  if (user?.friends.length > 0) {
    user?.friends.forEach(async (friendId: Number | String) => {
      const friend = await getProfile(friendId);
      setFriendsArray(await friend);
    });
  }
  return friendsArray;
};

export const sendFriendRequest = async (requestData: {
  sender: String | Number;
  receiver: String | Number;
  accepted: Boolean;
}) => {
  const res = await axios.post(
    `${backendApiUrl}/users/${requestData.receiver}/add-friend/`,
    JSON.stringify(requestData),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  try {
    const data = await res.data;
  } catch (error) {}
};

export const refetchUser = async (
  dispatch: Function,
  userId: number | string
) => {
  const user = await getProfile(userId);
  localStorage.setItem("user", JSON.stringify(await user));

  dispatch(setUser(user));
  dispatch(updateUserSuccess());
};

export const updateUserProfile = async (
  router: NextRouter,
  dispatch: Function,
  userId: number | string,
  data: FormData
) => {
  console.log(userId);
  if (userId !== undefined) {
    console.log("userId", Number(userId));
    dispatch(updateUserPending());
    const res = await axios.put(
      `${backendApiUrl}/users/${Number(userId)}/`,
      data
    );

    try {
      const updatedUser = await res.data;
      router.reload(window.location.href);
      dispatch(updateUserSuccess());
    } catch (error) {
      console.log("error", error);
      dispatch(updateUserError());
    }
  }
};
