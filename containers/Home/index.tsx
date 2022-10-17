import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Post from "../../components/Post";
import { checkSize } from "../../hooks/useWidth";
import { useSelector } from "../../redux/hooks";
import { PostInterface } from "../../types";
import AddForm from "../AddForm";
import Bookmarks from "../Bookmarks";
import Sidebar from "../Sidebar";

import { HomeContainer, HomeContent } from "./styles";

export default function Home() {
  const [hideBookmarks, setHideBookmarks] = useState(false);
  const [hideSidebar, setHideSidebar] = useState(false);
  const user = useSelector((state) => {
    return state.user.data;
  });
  const router = useRouter();
  const posts: PostInterface[] = useSelector((state) => {
    return state.posts.data;
  });

  const reversedPosts = Array(...posts).reverse();

  useEffect(() => {
    checkSize(setHideSidebar, setHideBookmarks);
    window.addEventListener("resize", () => {
      checkSize(setHideSidebar, setHideBookmarks);
    });
  }, []);
  if (user) {
    return (
      <HomeContainer>
        {user ? (
          <>
            <Bookmarks hidden={hideBookmarks ? true : false} />
            <HomeContent>
              <AddForm />
              <div className="posts">
                {posts?.length > 0 ? (
                  <>
                    {reversedPosts.map((post, index) => (
                      <Post post={post} key={index} />
                    ))}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </HomeContent>
            <Sidebar hidden={hideSidebar ? true : false} />
          </>
        ) : (
          <>Loading...</>
        )}
      </HomeContainer>
    );
  } else {
    router.push("/login");
  }
}
