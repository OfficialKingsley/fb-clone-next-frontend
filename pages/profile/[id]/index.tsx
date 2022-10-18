import Image from "next/image";
import { BsCamera } from "react-icons/bs";
import Profile from "../../../containers/Profile";
import { getProfile } from "../../../redux/apiCalls";
import { borderRadius, colors, spacing } from "../../../utils/variables";

const backendApiUrl = process.env.BACKEND_API_URL;

export const getServerSideProps = async (context) => {
  const userRes = await fetch(`${backendApiUrl}/users/${context.params.id}/`);
  const postRes = await fetch(
    `${backendApiUrl}/users/${context.params.id}/posts/`
  );
  const user = await userRes.json();
  const posts = await postRes.json();
  let friends = [];
  for (let friendId of user?.friends) {
    const friend = await getProfile(friendId);
    friends = [...friends, await friend];
  }
  return {
    props: {
      user,
      friends,
      posts,
    },
  };
};

const user = ({ user, friends, posts }) => {
  return <Profile user={user} friends={friends} posts={posts} />;
};

export default user;
