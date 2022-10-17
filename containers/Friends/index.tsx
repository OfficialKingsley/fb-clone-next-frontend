import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Friend from "../../components/Friend";
import FriendsGrid from "../../components/FriendsGrid";
import { checkSize } from "../../hooks/useWidth";
import { getFriends, getProfile } from "../../redux/apiCalls";
import { useSelector } from "../../redux/hooks";
import { PostInterface } from "../../types";
import { ButtonGroup, Divider, Section } from "../../utils/styles";
import { colors, spacing } from "../../utils/variables";
import Bookmarks from "../Bookmarks/friends";
// import Bookmarks from "../Bookmarks";
import Sidebar from "../Sidebar";

import { HomeContainer, HomeContent } from "./styles";

const backendApiUrl = "http://localhost:8000/api";

export default function Friends() {
  const [hideBookmarks, setHideBookmarks] = useState(false);
  const [hideSidebar, setHideSidebar] = useState(false);
  const [friends, setFriends] = useState([]);

  const router = useRouter();

  const user = useSelector((state) => {
    return state.user.data;
  });

  const removeFriend = (id) => {
    const friendList = user?.friends.filter((friendId) => {
      return friendId !== id;
    });
    setFriends(friendList);
  };

  useEffect(() => {
    setFriends(user?.friends);

    checkSize(setHideSidebar, setHideBookmarks);
    window.addEventListener("resize", () => {
      checkSize(setHideSidebar, setHideBookmarks);
    });
  }, [user?.friends]);
  return (
    <HomeContainer>
      {user && (
        <>
          <Bookmarks hidden={hideBookmarks ? true : false} />
          <HomeContent>
            <FriendsGrid>
              {friends?.length > 0 ? (
                friends?.map((id) => (
                  <Friend
                    key={id}
                    friendId={id}
                    buttonText1={"View Profile"}
                    buttonText2={"Unfriend"}
                    action1={() => {
                      router.push(`/profile/${id}`);
                    }}
                    action2={() => {}}
                  />
                ))
              ) : (
                <>You have no friends</>
              )}
            </FriendsGrid>
          </HomeContent>
        </>
      )}
    </HomeContainer>
  );
}
