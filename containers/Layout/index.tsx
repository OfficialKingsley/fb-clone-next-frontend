import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { GlobalStyles } from "../../utils/styles";
import { darkTheme, lightTheme } from "../../utils/themes";
import Navbar from "../Navbar";
import { LayoutHeader, LayoutMain } from "./styles";
import { useEffect } from "react";
import { getPosts, refetchUser } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "../../redux/hooks";
import { getUser } from "../../redux/apiCalls";
import Router, { useRouter } from "next/router";

let themeChangerFunction: Function;
const Layout = ({ children }) => {
  const [theme, setTheme] = useState(null);
  // const [foundUser, setFoundUser] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const userTheme = useSelector((state) => {
    return state.theme.data;
  });

  useEffect(() => {
    const fetchData = async () => {
      await getPosts(dispatch);
    };
    const fetchUser = async () => {
      const user = await getUser(dispatch);
      if (!user?.id) {
        router.push("/login");
      } else {
        await refetchUser(dispatch, user?.id);
        fetchData();
      }
    };
    fetchUser();
    setTheme(userTheme);
  }, [dispatch, router, userTheme]);

  return (
    theme && (
      <ThemeProvider
        theme={theme ? (theme === "dark" ? darkTheme : lightTheme) : null}
      >
        <GlobalStyles />
        <LayoutHeader>
          <Navbar />
        </LayoutHeader>
        <LayoutMain>{children}</LayoutMain>
      </ThemeProvider>
    )
  );
};

export default Layout;
export let themeChanger: Function = themeChangerFunction;
