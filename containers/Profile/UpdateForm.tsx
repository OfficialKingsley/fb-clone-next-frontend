import React, { useState } from "react";
import { useDispatch, useSelector } from "../../redux/hooks";
import { Divider, Section } from "../../utils/styles";
import {
  FormHeader,
  InputContainer,
  UpdateForm,
  UpdateFormContainer,
} from "./styles";

const UpdateFormComponent = ({ setShowForm }) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => {
    return state.user;
  });

  const [email, setEmail] = useState(userState.data?.email);
  const [firstName, setFirstName] = useState(userState.data?.first_name);
  const [middleName, setMiddleName] = useState(userState.data?.middle_name);
  const [lastName, setLastName] = useState(userState.data?.last_name);
  const [dateOfBirth, setDateOfBirth] = useState(userState.data?.date_of_birth);
  const [profileImage, setProfileImage] = useState(
    userState.data?.profile_image
  );
  const [coverImage, setCoverImage] = useState(userState.data?.cover_image);

  const clearForm = () => {
    setEmail("");
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setDateOfBirth("");
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (email === "") {
      formData.append("email", userState.data?.email);
    } else {
      formData.append("email", email);
    }
    if (firstName === "") {
      formData.append("first_name", userState.data?.first_name);
    } else {
      formData.append("first_name", firstName);
    }
    if (middleName === "") {
      formData.append("middle_name", userState.data?.middle_name);
    } else {
      formData.append("middle_name", middleName);
    }
    if (lastName === "") {
      formData.append("last_name", userState.data?.last_name);
    } else {
      formData.append("last_name", lastName);
    }
    if (dateOfBirth === "") {
      formData.append("date_of_birth", userState.data?.date_of_birth);
    } else {
      formData.append("date_of_birth", dateOfBirth);
    }
    formData.append("date_of_birth", dateOfBirth);
    if (profileImage === null) {
      formData.append("profile_image", "");
    }
    if (coverImage === null) {
      formData.append("cover_image", "");
    }
    userState.error && clearForm();
    userState.success && clearForm();
  };
  return (
    <UpdateFormContainer>
      <Section>
        <UpdateForm>
          <FormHeader>
            <h2>Update Profile</h2>
            <button
              onClick={() => {
                setShowForm(false);
              }}
            >
              &times;
            </button>
          </FormHeader>
          <InputContainer>
            <input
              type="email"
              value={email}
              placeholder="Email Address"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </InputContainer>
          <InputContainer>
            <input
              type="text"
              value={firstName}
              required
              placeholder="First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </InputContainer>
          <InputContainer>
            <input
              type="text"
              value={middleName}
              placeholder="Middle Name"
              onChange={(e) => {
                setMiddleName(e.target.value);
              }}
            />
          </InputContainer>
          <InputContainer>
            <input
              type="text"
              value={lastName}
              placeholder="Last Name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </InputContainer>
          <InputContainer>
            <input
              type="date"
              value={dateOfBirth}
              placeholder="Middle Name"
              onChange={(e) => {
                setDateOfBirth(e.target.value);
              }}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="profile_image">Profile Image</label>
            <input
              type="file"
              accept="image/jpeg, image/jpg, image/png"
              id="profile_image"
              hidden
              required
              placeholder="Middle Name"
              onChange={(e) => {
                setProfileImage(e.target.files[0]);
              }}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="cover_image">Cover Image</label>
            <input
              type="file"
              id="cover_image"
              hidden={true}
              accept="image/jpeg, image/jpg, image/png"
              //   value={profileImage}
              required
              placeholder="Cover Image"
              onChange={(e) => {
                setCoverImage(e.target.files[0]);
              }}
            />
          </InputContainer>
          <InputContainer className="button-container">
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Update
            </button>
          </InputContainer>
          {/* 
                    
                    profile_image
                    cover_image =
                 */}
          <Divider />
        </UpdateForm>
      </Section>
    </UpdateFormContainer>
  );
};

export default UpdateFormComponent;
