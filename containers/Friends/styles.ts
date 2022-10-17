import styled from "styled-components";
import { borderRadius, spacing } from "../../utils/variables";

export const HomeContainer = styled.section`
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HomeContent = styled.main`
  flex: 1 0;
  padding: 1rem 8rem 1rem 6rem;

  .addPostSection {
    height: 123px;
  }
`;

export const AddPostForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  .divider {
    flex: 1;
  }
`;

export const AddFormTop = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${spacing.sm}px;
  *:first-child {
    display: block;
    margin-right: ${spacing.nm}px;
    img {
      border-radius: ${borderRadius.circle};
    }
  }
`;
export const AddButton = styled.button`
  flex: 1;
  cursor: pointer;
  height: 40px;
  display: block;
  text-align: left;
  padding: 0 2rem;
  margin-top: -1px;
  background-color: ${({ theme }) => theme.bg.tertiary};
  color: ${({ theme }) => theme.text.secondary};
  /* color: inherit; */
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  padding-top: ${spacing.sm}px;
  font-weight: lighter;
  border: none;
  outline: none;
  border-radius: 20px;
  margin-left: ${spacing.nm};
  &:hover {
    background-color: ${({ theme }) => theme.bg.hover};
  }
`;

export const AddFormBottom = styled.div`
  flex: 1;
`;
