import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { KmvNotifications } from "../public/images/ImageComponents";
import { logoutUser } from "../redux/apiCalls";
import { useDispatch, useSelector } from "../redux/hooks";

const backendUrl = process.env.BACKEND_URL;
const RightNav = ({ className }) => {
  const dispatch = useDispatch();
  const [notifications, setNotifications] = useState([]);
  const user = useSelector((state) => {
    return state.user.data;
  });
  useEffect(() => {
    const fetchNotifications = async () => {
      const res = await fetch(
        `${backendUrl}/api/users/${user?.id}/notifications/`
      );
      const notifications = await res.json();
      setNotifications(notifications);
    };
    fetchNotifications();
  }, [user.id]);
  return (
    <div className={className}>
      {user && (
        <>
          <div className="content" style={{ display: "flex" }}>
            <Link href={`/profile/${user?.id}`}>
              <a
                style={{
                  cursor: "pointer",
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={
                    user?.profile_image
                      ? `${backendUrl}${user?.profile_image}`
                      : ""
                  }
                  width={40}
                  height={40}
                  alt=""
                />
              </a>
            </Link>
            <Link href={"/notifications"}>
              <button>
                {notifications?.length >= 1 && <>{notifications?.length}</>}
                <KmvNotifications />
              </button>
            </Link>
            <button
              onClick={() => {
                logoutUser(dispatch, user.id);
              }}
            >
              <Link href={"/login"}>
                <a>Logout</a>
              </Link>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default RightNav;
