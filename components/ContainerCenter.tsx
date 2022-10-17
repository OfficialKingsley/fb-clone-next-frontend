import React from "react";
import styled from "styled-components";

const CenterContent = styled.div`
  max-width: 950px;
  margin: 0 auto;
  padding-right: 15px;
  border: 2px solid red;
`;
const ContainerCenter = ({ children }) => {
  return <CenterContent>{children}</CenterContent>;
};

export default ContainerCenter;
