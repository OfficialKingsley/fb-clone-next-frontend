import { borderRadius, colors } from "./../../utils/variables";
import styled from "styled-components";
import { spacing } from "../../utils/variables";

export const BookmarksContainer = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.text.primary};
  flex-basis: 360px;
  max-width: 320px;
  min-width: 320px;
  min-height: 100vh;
  max-height: 100vh;
`;

export const BookmarksContent = styled.ul`
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  max-width: 300px;
  height: calc(100vh - 56px);
  min-height: calc(100vh - 56px);
  max-height: calc(100vh - 56px);
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  align-items: flex-start;
  padding: 0;
  margin: 0;
  padding-top: 1rem;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.bg.secondary};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${colors.scrollThumb};
    border-radius: ${borderRadius.section};
  }
`;
export const BookmarksItem = styled.li`
  height: 44px;
  min-height: 44px;
  /* margin: ${Number(spacing.nm) / 2}px 0; */
  /* height: 60px; */
  width: 280px;
  max-width: 280px;
  /* border: 2px solid white; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${spacing.nm};
  a {
    height: 100%;
    width: 100%;
    max-width: 264px;
    display: flex;
    align-items: center;
    /* border: 2px solid red; */
    border-radius: 10px;
    padding: 0 ${spacing.nm}px;
    /* padding: 0 1rem; */
    span {
      display: block;
      margin-left: ${spacing.nm}px;
    }
    &:hover {
      background-color: ${({ theme }) => theme.bg.icon};
    }
  }
`;
