import React, { useState } from "react";
import Link from "next/link";
import { BookmarksContainer, BookmarksContent, BookmarksItem } from "./styles";
import Image from "next/image";
import {
  CommunitiesImage,
  EventsImage,
  FavouritesImage,
  FriendsImage,
  MemoriesImage,
  PagesImage,
  ProfileImage,
  RecentImage,
  SavedImage,
  WatchImage,
} from "../../public/images/ImageComponents";
import { Divider } from "../../utils/styles";
import { useSelector } from "../../redux/hooks";

const backendUrl = "http://localhost:8000";

export default function Bookmarks({ hidden }) {
  const user = useSelector((state) => {
    return state.user.data;
  });
  const bookmarkList: {
    id: number;
    img: any;
    text: string;
    link: string;
    width: string | number;
    height: string | number;
  }[] = [
    {
      id: 1,
      img: `${backendUrl}${user?.profile_image}`,
      text: `${user?.full_name}`,
      link: `/profile/${user?.id}`,
      width: "28",
      height: "28",
    },
    {
      id: 2,
      img: FriendsImage,
      text: "Friends",
      link: "/friends",
      width: "28",
      height: "28",
    },
    {
      id: 3,
      img: CommunitiesImage,
      text: "Suggestions",
      link: "/friends/suggestions",
      width: "28",
      height: "28",
    },
    {
      id: 4,
      img: WatchImage,
      text: "Friend Requests",
      link: "/friend-requests",
      width: "28",
      height: "28",
    },
  ];
  return (
    <BookmarksContainer hidden={hidden}>
      {user && (
        <BookmarksContent>
          {bookmarkList.map((bookmark) => (
            <BookmarksItem key={bookmark.id}>
              <Link href={bookmark.link}>
                <a>
                  <Image
                    src={bookmark.img}
                    alt=""
                    width={bookmark.width}
                    height={bookmark.height}
                    style={{ borderRadius: "50%" }}
                  />
                  <span>{bookmark.text}</span>
                </a>
              </Link>
            </BookmarksItem>
          ))}
          <Divider style={{ width: "100%", margin: "1rem 8px" }} />
        </BookmarksContent>
      )}
    </BookmarksContainer>
  );
}
