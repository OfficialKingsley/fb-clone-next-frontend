import React, { useEffect, useState } from "react";

import {
  InputWithLabel,
  LoginContainer,
  LoginContent,
  LoginForm,
  LoginFormContainer,
  RegisterContainer,
  RegisterForm,
  Text,
  TextContainer,
} from "./styles";
import { useDispatch, useSelector } from "./../../redux/hooks";
import { loginUser } from "./../../redux/apiCalls";
import Link from "next/link";
import { borderRadius, colors } from "../../utils/variables";
import { Divider } from "../../utils/styles";
import { useRouter } from "next/router";
import styled from "styled-components";
import { InputContainer } from "./styles";
import Register from "./Register";

export default function Login() {
  const [showRegister, setShowRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const userId = useSelector((state) => {
    if (state.user.data?.id) {
      return state.user.data?.id;
    } else return null;
  });
  const userState = useSelector((state) => {
    return state.user;
  });
  const login = async (e): Promise<void> => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    const loggedInState: boolean = await loginUser(dispatch, loginData);
    if (loggedInState === true) {
      router.push("/");
    } else {
      console.log("Wrong Login");
    }
  };

  useEffect(() => {
    if (userId) {
      router.push("/");
    }
  }, [userId, router]);

  if (userId) {
    router.push("/");
  } else {
    return (
      <LoginContainer>
        {!userId ? (
          <LoginContent>
            <TextContainer>
              <Text>
                Facebook helps you connect and share with people in your life
              </Text>
            </TextContainer>
            {showRegister && <Register setShowRegister={setShowRegister} />}
            <LoginFormContainer>
              {userState.success && <>Successfully created user</>}
              <LoginForm>
                <InputContainer>
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </InputContainer>
                <InputContainer>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </InputContainer>
                <InputContainer className="button-container">
                  <button type="submit" onClick={login}>
                    Login
                  </button>
                </InputContainer>

                <div
                  style={{
                    textAlign: "center",
                    color: colors.blueLink,
                  }}
                >
                  <Link href="/forgotten">
                    <a>Forgotten Password?</a>
                  </Link>
                </div>
                <Divider />
                <InputContainer className="button-container green">
                  <button
                    onClick={() => {
                      setShowRegister(true);
                    }}
                    type="button"
                  >
                    Register
                  </button>
                </InputContainer>
              </LoginForm>
            </LoginFormContainer>
          </LoginContent>
        ) : (
          <>Loading ...</>
        )}
      </LoginContainer>
    );
  }
}
