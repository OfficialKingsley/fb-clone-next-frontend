export const useWidth = (): number => {
  const width = Number(window.innerWidth);
  return width;
};

export const checkSize = (
  setHideSidebar: Function,
  setHideBookmarks: Function
) => {
  if (innerWidth < 900) {
    setHideSidebar(true);
    setHideBookmarks(true);
  } else if (innerWidth > 900 && innerWidth < 1100) {
    setHideSidebar(false);
    setHideBookmarks(true);
  } else if (innerWidth > 1100) {
    setHideSidebar(false);
    setHideBookmarks(false);
  }
};
