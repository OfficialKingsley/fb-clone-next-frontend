import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Friend from "../../components/Friend";
import FriendsGrid from "../../components/FriendsGrid";
import { checkSize } from "../../hooks/useWidth";
import {
  getFriends,
  getProfile,
  sendFriendRequest,
} from "../../redux/apiCalls";
import { useSelector } from "../../redux/hooks";
import Bookmarks from "../Bookmarks/friends";

import { HomeContainer, HomeContent } from "./styles";

const backendApiUrl = "http://localhost:8000/api";

export default function FriendSuggestions() {
  const [hideBookmarks, setHideBookmarks] = useState(false);
  const [hideSidebar, setHideSidebar] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const loggedInUser = useSelector((state) => {
    return state.user.data;
  });

  const addFriend = async (id) => {
    await sendFriendRequest({
      sender: loggedInUser?.id,
      receiver: id,
      accepted: false,
    });
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      const res = await fetch(`${backendApiUrl}/users/`);
      try {
        let suggestionsArr = [];
        const users = await res.json();
        const filtered = await users?.filter(function (user) {
          return !this?.includes(user?.id) && user?.id !== loggedInUser?.id;
        }, loggedInUser?.friends);
        for (let suggestion of filtered) {
          suggestionsArr = [...suggestionsArr, suggestion?.id];
        }
        setSuggestions(suggestionsArr);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSuggestions();

    const fetchSentRequests = async (id) => {
      const res = await fetch(
        `${backendApiUrl}/users/${loggedInUser?.id}/sent-requests/`
      );
      const sentRequests = await res.json();
      for (let request of sentRequests) {
        if (
          request.sender === loggedInUser?.id &&
          request.receiver === id &&
          request.accepted === false
        ) {
          const sentRequest = true;
          return sentRequest;
        }
        return false;
      }
    };

    checkSize(setHideSidebar, setHideBookmarks);
    window.addEventListener("resize", () => {
      checkSize(setHideSidebar, setHideBookmarks);
    });
  }, [loggedInUser?.friends, loggedInUser?.id]);
  const router = useRouter();
  return (
    <HomeContainer>
      {loggedInUser && (
        <>
          <Bookmarks hidden={hideBookmarks ? true : false} />
          <HomeContent>
            <FriendsGrid>
              {suggestions?.length > 0 ? (
                suggestions.map((id) => (
                  <Friend
                    key={id}
                    friendId={id}
                    buttonText1={"View Profile"}
                    buttonText2={"Add Friend"}
                    action1={() => {
                      router.push(`/profile/${id}`);
                    }}
                    action2={() => {
                      addFriend(id);
                    }}
                  />
                ))
              ) : (
                <>
                  You have no friend suggestions. You are probably friends with
                  everybody on this cloned facebook 😂😂😂
                </>
              )}
            </FriendsGrid>
          </HomeContent>
        </>
      )}
    </HomeContainer>
  );
}
