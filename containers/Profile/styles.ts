import styled from "styled-components";
import { borderRadius, colors, spacing } from "../../utils/variables";

export const CoverImageContainer = styled.div`
  position: relative;
  min-height: 350px;
  max-height: 350px;
  border-bottom-left-radius: ${borderRadius.section};
  border-bottom-right-radius: ${borderRadius.section};
  display: flex;
`;
export const ProfileInfo = styled.div`
  background-color: ${({ theme }) => theme.bg.secondary};
  display: block;
`;

export const EditSection = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.7rem;
  padding-top: 0.7rem;
  color: ${({ theme }) => theme.text.placeholder};
  a {
    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.text.primary};
    }
  }
`;

export const Name = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text.primary};
`;
export const ProfileAndPostsContainer = styled.div``;
export const ProfileAndPosts = styled.div`
  padding: 1rem 0 1rem 1rem;
  display: flex;

  & > *:first-child {
    flex: 2;
    margin-right: 1rem;
  }
  & > *:nth-child(2) {
    flex: 3;
    margin-left: 1rem;
  }
`;

export const UpdateFormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 888;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextInput = styled.textarea`
  border: none;
  resize: none;
  overflow-y: scroll;
  min-height: 150px;
  max-height: 150px;
  background: transparent;
  outline: none;
  color: ${({ theme }) => theme.text.primary};
`;

export const PostButton = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.bg.tertiary};
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.text.primary};
  padding: ${spacing.nm}px;
`;
export const FormHeader = styled.header`
  display: flex;
  justify-content: space-between;
  h3:first-child {
    flex: 1;
  }
  button {
    width: 32px;
    height: 32px;
    border-radius: ${borderRadius.circle};
    border: none;
    background-color: ${({ theme }) => theme.bg.secondary};
    cursor: pointer;
    color: white;
    font-size: 1.3rem;
    &:hover {
      background-color: ${({ theme }) => theme.bg.tertiary};
    }
  }
`;

export const UpdateForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 400px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 0.4rem 0;
  border: 1px solid ${({ theme }) => theme.bg.tertiary};
  border-radius: ${spacing.nm}px;
  padding: ${spacing.nm}px;
  min-height: 48px;
  max-height: 48px;
  width: 100%;
  input,
  button {
    border: none;
    outline: none;
    background: none;
    width: 100%;
    color: ${({ theme }) => theme.text.primary};
  }
  input {
    font-size: 1.1rem;
  }
  &.button-container {
    background-color: ${colors.blue};
    cursor: pointer;
    border: none;
    &:hover {
      background-blend-mode: darken;
    }
    button {
      display: block;
      cursor: pointer;
      color: ${colors.white};
      // background: green;
      height: 48px;
      font-size: 1.4rem;
    }
    &.green {
      background-color: ${colors.lime};
      max-width: 200px;
    }
  }
`;
