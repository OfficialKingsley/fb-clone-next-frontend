import { DefaultTheme, createGlobalStyle } from "styled-components";

export interface Theme extends DefaultTheme {
  bg: {
    primary: string;
    secondary: string;
    tertiary: string;
    divider: string;
    icon: string;
    hover: string;
  };
  text: {
    primary: string;
    secondary: string;
    placeholder: string;
    placeholder2: string | undefined | null;
    disabled: string;
  };
}
