import Head from "next/head";
import Login from "../containers/Login";

const loginPage = () => {
  return (
    <div className="login-page">
      <Head>
        <title>Facebook - Login and Register</title>
      </Head>
      <Login />
    </div>
  );
};

export default loginPage;
