import React, { useEffect, useState } from "react";
import { useSelector } from "../redux/hooks";
import { Section } from "../utils/styles";

const NotificationsPage = () => {
  const backendUrl = process.env.BACKEND_URL;
  const loggedInUser = useSelector((state) => {
    return state.user.data;
  });
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    const fetchNotifications = async () => {
      const res = await fetch(
        `${backendUrl}/api/users/${loggedInUser?.id}/notifications/`
      );
      const notifications = await res.json();
      setNotifications(notifications);
    };
    fetchNotifications();
  }, [loggedInUser?.id]);
  return (
    <div>
      <header>
        <h2>Notifications</h2>
      </header>
      <ul>
        {notifications?.map((notification) => (
          <li key={notification?.id}>
            <Section>
              <div>
                Message:{" "}
                <p> &nbsp;&nbsp;&nbsp;&nbsp; {notification?.message}</p>
              </div>
              <div>Read: {notification?.read_state ? "True" : "False"}</div>
            </Section>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPage;
