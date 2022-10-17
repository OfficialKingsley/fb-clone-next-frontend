import styled from "styled-components";

export const HomeContainer = styled.section`
  display: flex;
`;

export const HomeContent = styled.main`
  flex: 1 0;
  padding: 1rem 6rem 1rem 4rem;

  @media screen and (max-width: 900px) {
    padding: 1rem 8rem 1rem 8rem;
  }
  @media screen and (max-width: 1100px) {
    padding: 1rem 0rem 1rem 0rem;
  }
  @media screen and (max-width: 1200px) {
    padding: 1rem 4rem 1rem 2rem;
  }

  .addPostSection {
    height: 123px;
  }
`;
