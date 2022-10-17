import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsCamera } from "react-icons/bs";
import ContainerCenter from "../../components/ContainerCenter";
import Post from "../../components/Post";
import { sendFriendRequest } from "../../redux/apiCalls";
import { useSelector } from "../../redux/hooks";
import { Divider, Section } from "../../utils/styles";
import { borderRadius, colors, spacing } from "../../utils/variables";
import AddForm from "../AddForm";
import {
  CoverImageContainer,
  EditSection,
  Info,
  Name,
  ProfileAndPosts,
  ProfileAndPostsContainer,
  ProfileInfo,
  UpdateForm,
  UpdateFormContainer,
} from "./styles";
import UpdateFormComponent from "./UpdateForm";

const backendUrl = "http://localhost:8000";

const Profile = ({ user, friends, posts }) => {
  const [sentRequest, setSentRequest] = useState(false);
  const [isFriend, setIsFriend] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const loggedInUser = useSelector((state) => {
    return state.user.data;
  });

  useEffect(() => {
    const fetchSentRequests = async () => {
      const res = await fetch(
        `${backendUrl}/api/users/${loggedInUser?.id}/sent-requests/`
      );
      const sentRequests = await res.json();
      for (let request of sentRequests) {
        if (
          request.sender === loggedInUser?.id &&
          request.receiver === user?.id &&
          request.accepted === false
        ) {
          setSentRequest(true);
          setIsFriend(false);
          break;
        } else if (loggedInUser?.friends.includes(user?.id)) {
          setIsFriend(true);
          setSentRequest(false);
          break;
        }
      }
    };
    fetchSentRequests();
  });

  const handleRequests = (e) => {
    e.preventDefault();
    sendFriendRequest({
      sender: loggedInUser?.id,
      receiver: user?.id,
      accepted: false,
    });
  };
  return (
    <div>
      {loggedInUser ? (
        <>
          <ProfileInfo>
            {showUpdateForm && (
              <UpdateFormComponent setShowForm={setShowUpdateForm} />
            )}
            <ContainerCenter>
              <CoverImageContainer>
                <Image
                  src={`${backendUrl}${user?.cover_image}`}
                  alt={`Cover Pic for ${user?.full_name}`}
                  width={2000}
                  height={2000}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderBottomLeftRadius: `${borderRadius.section}`,
                    borderBottomRightRadius: `${borderRadius.section}`,
                  }}
                />
                {user?.id === loggedInUser?.id && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "2rem",
                      right: "1rem",
                    }}
                  >
                    <label
                      htmlFor="cover_image"
                      style={{
                        background: colors.lime,
                        padding: "0.5rem",
                        margin: "0 1rem 1rem 0",
                        borderRadius: spacing.nm + "px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ display: "block", marginRight: "0.5rem" }}>
                        <BsCamera />
                      </span>
                      Change Cover
                    </label>
                    <input
                      type="file"
                      name=""
                      id="cover_image"
                      style={{ display: "none" }}
                    />
                  </div>
                )}
              </CoverImageContainer>
              <EditSection>
                <div
                  style={{
                    width: "180px",
                    height: "180px",
                  }}
                >
                  <div
                    className="relative-image"
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Image
                      src={
                        user?.profile_image
                          ? `${backendUrl}${user?.profile_image}`
                          : ""
                      }
                      alt={user?.full_name}
                      width={2000}
                      height={2000}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    />
                    <button
                      type="button"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        fontSize: "1.3rem",
                        cursor: "pointer",
                        padding: "0.6rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        border: "none",
                      }}
                    >
                      <BsCamera />
                    </button>
                  </div>
                </div>
                <Info>
                  <Name>{user?.full_name}</Name>
                  <Link href={"/friends"}>
                    <a>{user?.friends.length} friends</a>
                  </Link>
                  {user?.id === loggedInUser?.id && (
                    <button
                      onClick={() => {
                        setShowUpdateForm(true);
                      }}
                    >
                      Update Profile
                    </button>
                  )}
                </Info>
                <Info>
                  {loggedInUser?.id !== user?.id && (
                    <>
                      {!isFriend && (
                        <>
                          {sentRequest ? (
                            <button disabled>Add Friend</button>
                          ) : (
                            <button onClick={handleRequests}>Add Friend</button>
                          )}
                        </>
                      )}
                    </>
                  )}
                </Info>
              </EditSection>
            </ContainerCenter>
          </ProfileInfo>
          <ProfileAndPostsContainer>
            <ContainerCenter>
              <ProfileAndPosts>
                <div>
                  <Section>
                    <h3>Intro</h3>
                    <p>Bio</p>
                    {user?.id === loggedInUser?.id && (
                      <button type="button">Edit Bio</button>
                    )}
                    <Divider />
                    <h3>Details</h3>
                    {user?.date_of_birth && <p>DOB: {user?.date_of_birth}</p>}
                  </Section>
                  <Section>
                    <h3>Friends</h3>
                    <Info style={{ padding: 0 }}>
                      <Link href={"/friends"}>
                        <a>{user?.friends.length} friends</a>
                      </Link>
                    </Info>
                    <div>
                      {friends?.length > 0 ? (
                        <>
                          {friends?.map((friend) => (
                            <div key={friend?.id}>{friend?.first_name}</div>
                          ))}
                        </>
                      ) : (
                        <>
                          {loggedInUser?.id === user?.id && <>You Have</>}
                          No Friends
                        </>
                      )}
                    </div>
                  </Section>
                </div>
                <div>
                  {loggedInUser?.id === user?.id && <AddForm />}
                  <Section>
                    <h3>Posts</h3>
                  </Section>
                  <div>
                    {posts?.length > 0 ? (
                      <>
                        {posts?.map((post) => (
                          <Post key={post?.id} post={post} />
                        ))}
                      </>
                    ) : (
                      <>You have no posts</>
                    )}
                  </div>
                </div>
              </ProfileAndPosts>
            </ContainerCenter>
          </ProfileAndPostsContainer>
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
};

export default Profile;
