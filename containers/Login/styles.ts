import { borderRadius } from "./../../utils/variables";
import styled from "styled-components";
import { colors, spacing } from "../../utils/variables";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  max-height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  color: black;
  z-index: 800;
`;

export const LoginContent = styled.div`
  display: flex;
  position: absolute;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  // border: 2px solid red;
  width: 100%;
  z-index: 900;
  padding: 0 2rem;
  @media screen and (max-width: 750px) {
    padding: 0 2rem;
  }
  background-color: ${({ theme }) => theme.bg.primary};
  & > * {
    min-width: 350px;
    margin: 1rem 0;
    // border: 1px solid red;
  }
  & > *:first-child {
    min-width: 350px;
    flex: 1.8;
  }
  & > *:last-child {
    flex: 1.2;
    min-width: 400px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0rem 0 0;
  margin: 0 3rem 0 0;
  @media screen and (max-width: 750px) {
    padding: 0;
  }
`;

export const Text = styled.h2`
  font-weight: light;
  font-weight: 400;
  font-size: 1.5rem;
`;

export const LoginFormContainer = styled.div`
  padding: 0 4rem 0 0;
  // @media screen and (max-width: 750px) {
  //   padding: 0;
  // }
`;

export const LoginForm = styled.form`
  // border: 2px solid black;
  border-radius: ${spacing.xl}px;
  background-color: ${({ theme }) => theme.bg.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 1rem;
  @media screen and (max-width: 750px) {
    padding: 1rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 0.4rem 0;
  border: 1px solid rgba(0, 0, 0, 0.3);
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

export const RegisterContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.7);
`;

export const RegisterFormContainer = styled.div``;
export const InputWithLabel = styled.div`
  width: 100%;
`;
export const RegisterForm = styled.form`
  // border: 2px solid black;
  border-radius: ${spacing.xl}px;
  background-color: ${({ theme }) => theme.bg.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 1rem;
  @media screen and (max-width: 750px) {
    padding: 1rem;
  }
  max-width: 500px;
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 1px solid red; */
  width: 100%;
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
    color: ${({ theme }) => theme.text.primary};
    font-size: 1.3rem;
    &:hover {
      background-color: ${({ theme }) => theme.text.placeholder};
    }
  }
`;
