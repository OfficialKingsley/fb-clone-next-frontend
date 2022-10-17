import React from "react";
import styled from "styled-components";
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  & > * {
    flex: 1;
    margin: 0.5rem;
    max-width: 250px;
  }
`;
const FriendsGrid = ({ children }) => {
  return <Grid>{children}</Grid>;
};

export default FriendsGrid;
