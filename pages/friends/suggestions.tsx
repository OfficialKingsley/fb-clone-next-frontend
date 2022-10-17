import React from "react";
import Bookmarks from "../../containers/Bookmarks/friends";
import FriendSuggestions from "../../containers/Friends/suggestions";

const backendUrl = "http://localhost:8000";
const getServerSideProps = async () => {
  const res = await fetch(`${backendUrl}/api/users/`);
  const data = res.json();
};

const SuggestionsPage = (context) => {
  return (
    <div>
      <FriendSuggestions />
    </div>
  );
};

export default SuggestionsPage;
