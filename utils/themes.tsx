import { Theme } from "../styled-components";

export const darkTheme: Theme = {
  bg: {
    primary: "#18191a", //web-wash
    secondary: "#242526", // navbarBg
    tertiary: "#3a3b3c", // Commentbg
    divider: "#3e4042",
    icon: "rgba(255, 255, 255, 0.1)", // Secondary-Button
    hover: "rgba(255, 255, 255, 0.2)",

    // --card-background-flat: #323436;
    // --comment-background: #3a3b3c;
    // --comment-footer-background: #4e4f50;
  },
  text: {
    primary: "#e4e6eb",
    secondary: "#b0b3b8",
    placeholder: "#606770", // fds-gray-70
    placeholder2: "#8a8d91",
    disabled: "rgba(255, 255, 255, 0.3)", // text-disabled
  },
};

export const lightTheme: Theme = {
  bg: {
    primary: "#f0f2f5", //web-wash
    secondary: "#ffffff", // navbarBg
    tertiary: "#f0f2f5", // Commentbg
    divider: "#ced0d4",
    icon: "#e4e6eb", // Secondary-Button
    hover: "rgba(255, 255, 255, 0.2)",

    // --card-background-flat: #323436;
    // --comment-background: #3a3b3c;
    // --comment-footer-background: #4e4f50;
  },
  text: {
    primary: "#1c1e21",
    secondary: "#65676b",
    placeholder: "#606770", // fds-gray-70
    placeholder2: "#8a8d91",
    disabled: "#bcc0c4", // text-disabled
  },
};
