import Image from "next/image";
import Link from "next/link";
import { FaRegCommentAlt, FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import styled from "styled-components";
import { ProfileImage } from "../public/images/ImageComponents";
import { ButtonGroup, Divider, Section } from "../utils/styles";
import { borderRadius, colors, spacing } from "../utils/variables";
import { RiShareForwardLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "../redux/hooks";

const backendUrl = "http://localhost:8000";

const PostTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const PostMeta = styled.div`
  display: flex;
  /* padding-left: 1rem; */
  align-items: center;
`;
const PostMetaInfo = styled.div`
  display: flex;
  margin-left: 10px;
  flex-direction: column;
  a:hover {
    text-decoration: underline;
  }
`;

export const LikesInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.text.secondary};
  margin: ${spacing.nm}px 0;
`;
const OptionsButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: ${borderRadius.circle};
  background: none;
  border: none;
  color: ${({ theme }) => theme.text.primary};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.bg.tertiary};
  }
`;

const Options = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 888;
`;

const LikeCommentShare = styled.div`
  width: 100%;
  height: 30px;
  .active {
    color: ${colors.primary};
  }
  button {
    span {
      display: block;
      margin-right: ${spacing.nm}px;
    }
  }
`;

const OptionsContent = styled.div`
  min-width: 350px;
  ul {
    li {
      cursor: pointer;
      height: 40px;
      display: flex;
      align-items: center;
      button {
        width: 100%;
        display: flex;
        border: none;
        background: transparent;
        color: ${({ theme }) => theme.text.primary};
        cursor: pointer;
      }
      a {
        width: 100%;
        font-size: 1.5rem;
        /* border: 1px solid red; */
        &:hover {
          background-color: ${({ theme }) => theme.bg.tertiary};
          color: ${({ theme }) => theme.text.primary};
        }
      }
    }
  }
`;
const OptionsHeader = styled.div`
  display: flex;
  h3:first-child {
    flex: 1;
  }
  button {
    width: 32px;
    height: 32px;
    border-radius: ${borderRadius.circle};
    border: none;
    background-color: ${({ theme }) => theme.bg.secondary};
    cursor: pointer;
    color: ${({ theme }) => theme.text.primary};
    font-size: 1.3rem;
    &:hover {
      background-color: ${({ theme }) => theme.bg.tertiary};
    }
  }
`;
const Post = ({ post }) => {
  const [author, setAuthor] = useState(null);
  const [likeIsActive, setLikeIsActive] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [showFullText, setShowFullText] = useState(false);
  const { text } = post;
  const postDate = new Date(post.created_at).toUTCString();
  const [showOptions, setShowOptions] = useState(false);
  const user = useSelector((state) => {
    return state.user.data;
  });

  const likePost = async () => {
    await fetch(`${backendUrl}/api/posts/${post?.id}/like/`, {
      method: "POST",
      body: JSON.stringify({
        user_id: user?.id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const dislikePost = async () => {
    await fetch(`${backendUrl}/api/posts/${post?.id}/dislike/`, {
      method: "POST",
      body: JSON.stringify({
        user_id: user?.id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  useEffect(() => {
    text?.length > 200 ? setShowFullText(false) : setShowFullText(true);
    if (post?.likes.length > 0) {
      setLikeCount(post?.likes.length);
    }
    const fetchAuthor = async () => {
      const res = await fetch(`${backendUrl}/api/users/${post?.author}/`);
      const user = await res.json();
      setAuthor(user);
    };
    const fetchLikes = async () => {
      const res = await fetch(`${backendUrl}/api/posts/${post?.id}/likes/`);
      const likesObject: { likes: number[] } = await res.json();

      likesObject?.likes?.includes(user?.id) && setLikeIsActive(true);
    };
    fetchLikes();
    fetchAuthor();
  }, [text.length, post.likes.length, post?.author, post.id, user?.id]);
  return (
    <Section>
      {user && (
        <>
          {author && (
            <article>
              <PostTop>
                <PostMeta>
                  <Link href={`/profile/${post?.author}`}>
                    <a>
                      <Image
                        src={`${backendUrl}${author?.profile_image}`}
                        alt="Kingsley"
                        width={40}
                        height={40}
                        style={{
                          borderRadius: "50%",
                          marginRight: "0px",
                        }}
                      />
                    </a>
                  </Link>
                  <PostMetaInfo className="text-info">
                    <Link href={`/profile/${post?.author}`}>
                      <a>
                        <cite>{author?.full_name}</cite>
                      </a>
                    </Link>
                    <small>{postDate}</small>
                  </PostMetaInfo>
                </PostMeta>
                <OptionsButton
                  onClick={() => {
                    setShowOptions(true);
                  }}
                >
                  <AiOutlineMenu />
                </OptionsButton>
                {showOptions && (
                  <Options className="more-links">
                    <Section>
                      <OptionsContent>
                        <OptionsHeader>
                          <h3>Post Options</h3>
                          <button
                            type="button"
                            onClick={() => {
                              setShowOptions(false);
                            }}
                          >
                            &times;
                          </button>
                        </OptionsHeader>
                        <Divider />
                        <ul>
                          {user?.id === post.author && (
                            <>
                              <li>
                                <Link href={`/posts/${post?.id}/edit`}>
                                  <a>Edit</a>
                                </Link>
                              </li>
                              <Divider />
                              <li>
                                <Link href={`/posts/${post?.id}/delete`}>
                                  <a>Delete</a>
                                </Link>
                              </li>
                              <Divider />
                            </>
                          )}
                          <li>
                            <button
                              onClick={async () => {
                                if (!likeIsActive) {
                                  await dislikePost();
                                  setLikeIsActive(true);
                                  setLikeCount(likeCount + 1);
                                } else {
                                  await likePost();
                                  setLikeIsActive(false);
                                  setLikeCount(likeCount - 1);
                                }
                              }}
                            >
                              <a>{likeIsActive ? "Dislike" : "Like"}</a>
                            </button>
                          </li>
                          <Divider />
                          <li>
                            <Link href={`/profile/${post?.author}`}>
                              <a>View Author Of Post</a>
                            </Link>
                          </li>
                        </ul>
                      </OptionsContent>
                    </Section>
                  </Options>
                )}
              </PostTop>
              <Divider />
              <article className="content">
                <p
                  onClick={() => {
                    setShowFullText(!showFullText);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {showFullText === false ? (
                    <>{text?.slice(0, 200)} ...</>
                  ) : (
                    <>{text}</>
                  )}
                </p>
                <div className="img">
                  {post.image && (
                    <Image
                      src={`${backendUrl}${post.image}`}
                      alt=""
                      width={2000}
                      height={2000}
                      style={{ width: "100%", height: "auto" }}
                    />
                  )}
                </div>
              </article>
              <LikesInfo>
                <small>
                  {likeCount > 0 ? (
                    <>
                      <FaThumbsUp
                        color={colors.blue}
                        style={{ marginRight: spacing.nm }}
                      />
                      {likeCount ? (
                        <>
                          {likeCount} {likeCount > 1 ? "likes" : "like"}
                          {likeIsActive && ", Liked by You"}
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ) : (
                    <>{likeCount} likes</>
                  )}
                </small>
                <small title="Comment Not Supported Yet">0 comments</small>
              </LikesInfo>
              <Divider />
              <LikeCommentShare>
                <ButtonGroup>
                  <button
                    type="button"
                    className={likeIsActive ? "active" : undefined}
                    onClick={async () => {
                      if (likeIsActive) {
                        await dislikePost();
                        setLikeIsActive(false);
                        setLikeCount(likeCount - 1);
                      } else {
                        await likePost();
                        setLikeIsActive(true);
                        setLikeCount(likeCount + 1);
                      }
                    }}
                  >
                    <span>
                      {likeIsActive ? (
                        <FaThumbsUp color={colors.blue} />
                      ) : (
                        <FaRegThumbsUp />
                      )}
                    </span>
                    Like
                  </button>
                  <button type="button">
                    <span>
                      <FaRegCommentAlt />
                    </span>
                    Comment
                  </button>
                  <button type="button">
                    <span>
                      <RiShareForwardLine />
                    </span>
                    Share
                  </button>
                </ButtonGroup>
              </LikeCommentShare>
              <Divider />
              <div className="comments"></div>
            </article>
          )}
        </>
      )}
    </Section>
  );
};

export default Post;
