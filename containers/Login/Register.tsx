import React, { useState } from "react";
import { registerUser } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "../../redux/hooks";
import { Divider } from "../../utils/styles";
import {
  FormHeader,
  InputContainer,
  InputWithLabel,
  RegisterContainer,
  RegisterForm,
} from "./styles";

const Register = ({ setShowRegister }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const dispatch = useDispatch();
  const userState = useSelector((state) => {
    return state.user;
  });
  const clearForm = () => {
    setEmail("");
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setDateOfBirth("");
    setPassword("");
    setPassword2("");
    setShowRegister(false);
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("first_name", firstName);
    formData.append("middle_name", middleName);
    formData.append("last_name", lastName);
    formData.append("date_of_birth", dateOfBirth);
    formData.append("password", password);
    formData.append("password2", password2);
    await registerUser(formData, dispatch);
    userState.error && clearForm();
    userState.success && clearForm();
  };
  return (
    <div>
      <RegisterContainer>
        <RegisterForm>
          <FormHeader>
            <h3>Register</h3>
            <button
              type="button"
              onClick={() => {
                setShowRegister(false);
              }}
            >
              &times;
            </button>
          </FormHeader>
          <Divider />
          <InputContainer>
            <input
              type="email"
              required
              placeholder="Email Address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </InputContainer>
          <InputContainer>
            <input
              type="text"
              required
              placeholder="First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </InputContainer>
          <InputContainer>
            <input
              type="text"
              placeholder="Middle Name"
              value={middleName}
              onChange={(e) => {
                setMiddleName(e.target.value);
              }}
            />
          </InputContainer>
          <InputContainer>
            <input
              type="text"
              id="last_name"
              required
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </InputContainer>
          <InputWithLabel>
            <label htmlFor="date_of_birth">Date Of Birth</label>
            <InputContainer>
              <input
                type="date"
                required
                id="date_of_birth"
                placeholder="Date Of Birth"
                value={dateOfBirth}
                onChange={(e) => {
                  setDateOfBirth(e.target.value);
                }}
              />
            </InputContainer>
          </InputWithLabel>
          <InputContainer>
            <input
              type="password"
              required
              id="register_password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </InputContainer>
          <InputContainer>
            <input
              type="password"
              required
              id="confirm_password"
              placeholder="Confirm Password"
              value={password2}
              onChange={(e) => {
                setPassword2(e.target.value);
              }}
            />
          </InputContainer>
          <InputContainer className="button-container green">
            <button type="submit" onClick={handleRegister}>
              Register
            </button>
          </InputContainer>
        </RegisterForm>
      </RegisterContainer>
    </div>
  );
};

export default Register;
