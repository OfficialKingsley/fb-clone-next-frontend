import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Friend from "../../components/Friend";
import FriendsGrid from "../../components/FriendsGrid";
import { checkSize } from "../../hooks/useWidth";
import { refetchUser } from "../../redux/apiCalls";
// import { getProfile } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "../../redux/hooks";
import Bookmarks from "../Bookmarks/friends";
import { HomeContainer, HomeContent } from "./styles";

const backendUrl = "http://localhost:8000";
const FriendRequests = () => {
  const [hideBookmarks, setHideBookmarks] = useState(false);
  const [hideSidebar, setHideSidebar] = useState(false);
  const [friendRequests, setFriendRequests] = useState([]);
  const loggedInUser = useSelector((state) => {
    return state.user.data;
  });
  const dispatch = useDispatch();
  const acceptRequest = async (requestId) => {
    await fetch(
      `${backendUrl}/api/users/${loggedInUser?.id}/friend-requests/${requestId}/accept/`,
      { method: "POST", headers: { "Content-Type": "application/json" } }
    );
    await refetchUser(dispatch, loggedInUser?.id);
    const requestsFilter = friendRequests.filter((request) => {
      return request?.id !== requestId;
    });

    setFriendRequests(requestsFilter);
  };
  const declineRequest = async (requestId) => {
    await fetch(
      `${backendUrl}/api/users/${loggedInUser?.id}/friend-requests/${requestId}/decline/`,
      { method: "POST", headers: { "Content-Type": "application/json" } }
    );
    const requestsFilter = friendRequests.filter((request) => {
      return request?.id !== requestId;
    });
    setFriendRequests(requestsFilter);
  };
  useEffect(() => {
    const fetchRequests = async () => {
      const res = await fetch(
        `${backendUrl}/api/users/${loggedInUser?.id}/friend-requests/`
      );
      try {
        let requestsArr = [];
        const friend_requests = await res.json();
        for (let request of friend_requests) {
          if (request?.accepted !== true) {
            requestsArr = [...requestsArr, request];
          }
        }
        setFriendRequests(requestsArr);
      } catch (error) {}
    };
    fetchRequests();

    checkSize(setHideSidebar, setHideBookmarks);
    window.addEventListener("resize", () => {
      checkSize(setHideSidebar, setHideBookmarks);
    });
  }, [loggedInUser?.id]);
  return (
    <HomeContainer>
      {loggedInUser && (
        <>
          <Bookmarks hidden={hideBookmarks ? true : false} />
          <HomeContent>
            <FriendsGrid>
              {}
              {friendRequests?.length > 0 ? (
                friendRequests.map((request) => (
                  <>
                    {!request?.accepted ? (
                      <Friend
                        key={request?.id}
                        friendId={request?.sender}
                        buttonText1={"Accept"}
                        buttonText2={"Decline"}
                        action1={() => {
                          acceptRequest(request?.id);
                        }}
                        action2={() => {
                          declineRequest(request?.id);
                        }}
                      />
                    ) : (
                      <>You have no friend requests.</>
                    )}
                  </>
                ))
              ) : (
                <>You have no friend requests.</>
              )}
            </FriendsGrid>
          </HomeContent>
        </>
      )}
    </HomeContainer>
  );
};

export default FriendRequests;
