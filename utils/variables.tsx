import { darkTheme } from "./themes";

export const spacing: {
  sm: number | string;
  nm: number | string;
  md: number | string;
  lg: number | string;
  xl: number | string;
  xxl: number | string;
} = {
  sm: 4,
  nm: 8,
  md: 10,
  lg: 12,
  xl: 16,
  xxl: 20,
};
export const colors = {
  primary: "#2374e1",
  logo: "#2d88ff",
  link: "#385898",
  scrollThumb: "rgba(255, 255, 255, 0.3)",
  scrollShadow: `0 1px 2px rgba(0, 0, 0, 0.1), 0 -1px rgba(255, 255, 255, 0.05) inset`,
  blue: "#1877f2",
  cherry: "#f3425f",
  grape: "#9360f7",
  lemon: "#f7b928",
  lime: "#45bd62",
  pink: "#ff66bf",
  seafoam: "#54c7ec",
  teal: "#2abba7",
  tomato: "#fb724b",
  blueLink: "#4599ff",
  white: "#fff",
  black: "#000",
};

export const borderRadius = {
  input: 20,
  section: "10px",
  circle: "50%",
};

export const heights = {
  headerHeight: "56px",
  inputHeight: "56px",
};

export const details = {
  postGap: "16px",
  iconGap: "8px",
  sectionBg: darkTheme.bg.secondary,
  sectionBorderRadius:
    "max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px",
  sectionPdTop: "12px",
  sectioPdRightAndLeft: 16,
  sectionPaddingBottom: 10,
};
