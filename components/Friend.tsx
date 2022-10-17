import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getProfile } from "../redux/apiCalls";
import { useSelector } from "../redux/hooks";
import { Section } from "../utils/styles";
import { colors, spacing } from "../utils/variables";

export const FriendContainer = styled.div`
  max-width: 250px;
  min-width: 200px;
`;
const FriendContent = styled.figure``;
const FirstButton = styled.button`
  background-color: ${colors.primary};
  border: none;
  outline: none;
  padding: 0.5rem;
  display: block;
  border-radius: ${spacing.sm}px;
  width: 100%;
  margin: 0.5rem 0;
  cursor: pointer;
  color: ${({ theme }) => theme.text.primary};
`;
const SecondButton = styled.button`
  background-color: ${({ theme }) => theme.bg.tertiary};
  border: none;
  outline: none;
  padding: 0.5rem;
  display: block;
  border-radius: ${spacing.sm}px;
  width: 100%;
  margin: 0.5rem 0;
  cursor: pointer;
  color: ${({ theme }) => theme.text.primary};
`;
const backendUrl = "http://localhost:8000";
const Friend = ({ friendId, buttonText1, buttonText2, action1, action2 }) => {
  const [friend, setFriend] = useState(null);
  const [sentRequest, setSentRequest] = useState(false);
  const [isFriend, setIsFriend] = useState(false);

  const loggedInUser = useSelector((state) => {
    return state.user.data;
  });

  useEffect(() => {
    const fetchFriend = async () => {
      const friendRes = await getProfile(friendId);
      setFriend(await friendRes);
    };
    const fetchSentRequests = async () => {
      const res = await fetch(
        `${backendUrl}/api/users/${loggedInUser?.id}/sent-requests/`
      );
      const sentRequests = await res.json();
      for (let request of sentRequests) {
        if (
          request.sender === loggedInUser?.id &&
          request.receiver === friendId &&
          request.accepted === false
        ) {
          setSentRequest(true);
          setIsFriend(false);
          break;
        } else if (loggedInUser?.friends.includes(friendId)) {
          setIsFriend(true);
          setSentRequest(false);
          break;
        }
      }
    };
    fetchSentRequests();
    fetchFriend();
  }, [friendId, loggedInUser?.friends, loggedInUser?.id]);
  return (
    <Section>
      {friend && (
        <FriendContainer>
          <FriendContent>
            <Image
              src={
                friend?.profile_image
                  ? `${backendUrl}${friend?.profile_image}`
                  : ""
              }
              alt={friend?.full_name}
              width={2000}
              height={2000}
              style={{ flex: 1, width: "100%", height: "100%" }}
            />
            <figcaption>
              <h4>{friend?.full_name}</h4>
              <FirstButton
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  action1();
                }}
              >
                {buttonText1}
              </FirstButton>
              <SecondButton
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  if (buttonText2 === "Add Friend") {
                    setSentRequest(true);
                  }
                  action2();
                }}
              >
                {sentRequest ? "Cancel Request" : buttonText2}
              </SecondButton>
            </figcaption>
          </FriendContent>
        </FriendContainer>
      )}
    </Section>
  );
};

export default Friend;
