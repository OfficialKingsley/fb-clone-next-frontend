import React, { useState } from "react";
import styled from "styled-components";
import { Section } from "../../utils/styles";
import { sendPost } from "../../redux/apiCalls";
import { Divider } from "../../utils/styles";
import { borderRadius, spacing } from "../../utils/variables";
import { useDispatch, useSelector } from "../../redux/hooks";

export const FormContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 888;
`;

const TextInput = styled.textarea`
  border: none;
  resize: none;
  overflow-y: scroll;
  min-height: 150px;
  max-height: 150px;
  background: transparent;
  outline: none;
  color: ${({ theme }) => theme.text.primary};
`;

const PostButton = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.bg.tertiary};
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.text.primary};
  padding: ${spacing.nm}px;
`;
const FormHeader = styled.header`
  display: flex;
  h3:first-child {
    flex: 1;
  }
  button {
    width: 32px;
    height: 32px;
    border-radius: ${borderRadius.circle};
    border: none;
    background-color: ${({ theme }) => theme.bg.secondary};
    cursor: pointer;
    color: white;
    font-size: 1.3rem;
    &:hover {
      background-color: ${({ theme }) => theme.bg.tertiary};
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 400px;
`;
const ActualAddPostForm = ({ showForm, setShowForm, state }) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const user = useSelector((state) => {
    return state.user.data;
  });

  const clearData = () => {
    setText("");
    setImage(null);
    setShowForm(false);
  };

  const dispatch = useDispatch();
  const handlePost = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("author", user?.id);
    formData.append("text", text);
    if (image === null) {
      formData.append("image", "");
    } else {
      formData.append("image", image);
    }
    sendPost(formData, dispatch);
    state.success && clearData();
    state.error && clearData();
  };

  return (
    <>
      {user && (
        <div style={{ display: showForm ? "block" : "none" }}>
          <FormContainer>
            <div>
              <Section>
                <FormHeader>
                  <h3>Create a Post</h3>
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                    }}
                  >
                    &times;
                  </button>
                </FormHeader>
                <Divider />
                <Form action="">
                  <TextInput
                    name="text"
                    id="text"
                    cols={30}
                    rows={10}
                    placeholder={`What's on your mind, ${user?.first_name}`}
                    title="Text"
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                  ></TextInput>
                  <input
                    type="file"
                    name="image"
                    id="imageField"
                    title="Image"
                    alt="Post pic"
                    accept="image/jpeg, image/jpg, image/png"
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                    }}
                  />
                  <div>{state.pending && <>adding...</>}</div>
                  <Divider />
                  <PostButton type="submit" onClick={handlePost}>
                    Post
                  </PostButton>
                </Form>
              </Section>
            </div>
          </FormContainer>
        </div>
      )}
    </>
  );
};

export default ActualAddPostForm;
