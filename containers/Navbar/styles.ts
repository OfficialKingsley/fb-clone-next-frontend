import styled from "styled-components";
import CenterNav from "../../components/CenterNav";
import LeftNav from "../../components/LeftNav";
import RightNav from "../../components/RightNav";
import { colors, spacing } from "../../utils/variables";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 56px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.bg.secondary};
  color: ${({ theme }) => theme.text.secondary};
  padding: ${spacing.xl}px;
  z-index: 700;
  border-top: 1px solid ${({ theme }) => theme.bg.tertiary};
  border-bottom: 1px solid ${({ theme }) => theme.bg.tertiary};
`;

export const NavLeft = styled(LeftNav)`
  flex: 1;
  color: ${({ theme }) => theme.text.secondary};
  display: flex;
  align-items: center;
  flex-basis: 360px;
  max-width: 320px;
  height: 56px;
  @keyframes openForm {
    0% {
      width: 40px;
    }
    100% {
      width: 240px;
    }
  }
  @keyframes closeForm {
    0% {
      width: 240px;
    }
    100% {
      width: 40px;
    }
  }
  form {
    background-color: ${({ theme }) => theme.bg.tertiary};
    border-radius: 20px;
    height: 40px;
    max-height: 40px;
    min-width: 40px;
    display: flex;
    align-items: center;

    transition: all 500ms ease-in-out;
    font-size: 1rem;
    label {
      cursor: pointer;
      color: ${({ theme }) => theme.text.secondary};
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 20px;
        height: 20px;
      }
    }
    input {
      flex: 1;
      height: 30px;
      border: none;
      background: transparent;
      background-color: transparent;
      background: none;
      &:focus,
      &:focus-within {
        outline: none;
        border: none;
      }

      padding-left: ${spacing.sm}px;

      &::placeholder {
        color: ${({ theme }) => theme.text.placeholder2};
        /* text-align: center; */
      }
      color: ${({ theme }) => theme.text.primary};
    }
    &.open {
      animation: openForm 0.5s ease;
      animation-direction: normal;
      animation-fill-mode: forwards;
      padding: 0 ${spacing.xl}px;
      label {
        margin-right: ${spacing.lg}px;
      }
    }
    &.closed {
      animation: closeForm 0.5s ease;
      animation-direction: normal;
      animation-fill-mode: forwards;
      max-width: 40px;
      height: 40px;
      justify-content: center;
      label {
        width: 100%;
        height: 100%;
      }
      input {
        display: none;
      }
    }
  }
`;

export const NavCenter = styled(CenterNav)`
  display: flex;
  flex: 3;
  align-items: center;
  height: 56px;
  padding: 0 45px;

  ul {
    display: flex;
    align-items: center;
    /* border: 1px solid red; */
    height: 56px;
    width: 100%;
    li {
      max-width: 110px;
      min-width: 50px;
      height: 100%;
      cursor: pointer;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    li:not(:first-child) {
      margin-left: ${spacing.nm}px;
    }
    li div {
      height: 100%;
      width: 100%;
    }
    li a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      border-bottom: 3px solid transparent;
      border-top: 3px solid transparent;
    }
    li a.active {
      color: ${colors.primary};
      border-bottom: 3px solid ${colors.primary};
    }
  }
`;

export const NavRight = styled(RightNav)`
  flex: 1;
  flex-basis: 360px;
  max-width: 280px;
`;
