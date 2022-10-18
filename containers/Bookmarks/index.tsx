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

const backendUrl = process.env.BACKEND_URL;

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
      text: "Communities (groups)",
      link: "/communities",
      width: "28",
      height: "28",
    },
    {
      id: 4,
      img: WatchImage,
      text: "Watch",
      link: "/watch",
      width: "28",
      height: "28",
    },
    {
      id: 5,
      img: MemoriesImage,
      text: "Memories",
      link: "/memories",
      width: "28",
      height: "28",
    },
    {
      id: 6,
      img: SavedImage,
      text: "Saved",
      link: "/saved",
      width: "28",
      height: "28",
    },
    {
      id: 7,
      img: PagesImage,
      text: "Pages",
      link: "/pages",
      width: "28",
      height: "28",
    },
    {
      id: 8,
      img: EventsImage,
      text: "Events",
      link: "/events",
      width: "28",
      height: "28",
    },
    {
      id: 9,
      img: RecentImage,
      text: "Most recent",
      link: "/recent",
      width: "28",
      height: "28",
    },
    {
      id: 10,
      img: FavouritesImage,
      text: "Favourites",
      link: "/favourites",
      width: "28",
      height: "28",
    },
    {
      id: 11,
      img: WatchImage,
      text: "More",
      link: "/more",
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
