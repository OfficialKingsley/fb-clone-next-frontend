import styled, { createGlobalStyle } from "styled-components";
import { spacing } from "./variables";

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    line-height: 1.34;
    direction: ltr;
    color: ${({ theme }) => theme.text.primary};
    background-color: ${({ theme }) => theme.bg.primary};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  li {
    list-style: none;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  } */
  .hover-shade:hover {
    background-color: ${({ theme }) => theme.bg.tertiary};
    border-radius: 10px;
    align-self: center;
    margin-top: 4px;
    /* margin: 4px 0; */
    height: calc(100% - 8px);
  }

  .container {
  padding: 0 2rem;
}

.main {
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer {
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
}

.footer a {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.title a {
  color: #0070f3;
  text-decoration: none;
}

.title a:hover,
.title a:focus,
.title a:active {
  text-decoration: underline;
}

.title {
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
}

.title,
.description {
  text-align: center;
}

.description {
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
}

.code {
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    "Bitstream Vera Sans Mono", Courier New, monospace;
}

.grid {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
}

.card {
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;
}

.card:hover,
.card:focus,
.card:active {
  color: #0070f3;
  border-color: #0070f3;
}

.card h2 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
}

.card p {
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
}

.logo {
  height: 1em;
  margin-left: 0.5rem;
}

@media (max-width: 600px) {
  .grid {
    width: 100%;
    flex-direction: column;
  }
}

@media (prefers-color-scheme: dark) {
  .card,
  .footer {
    border-color: #222;
  }
  .code {
    background: #111;
  }
  .logo img {
    filter: invert(1);
  }
}
`;

export const Section = styled.section`
  border-radius: 20px;
  padding: ${spacing.lg}px ${spacing.xl}px ${spacing.md}px;
  background-color: ${({ theme }) => theme.bg.secondary};
  margin-bottom: ${spacing.xxl}px;
`;

export const Divider = styled.div`
  height: 1px;
  max-height: 1px;
  background-color: ${({ theme }) => theme.bg.divider};
  margin: 0.5rem 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  /* border: 1px solid red; */
  height: 100%;
  button {
    flex: 1;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    color: inherit;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: ${({ theme }) => theme.bg.icon};
    }
  }
`;
