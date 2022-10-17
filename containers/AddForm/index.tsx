import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AddButton, AddFormBottom, AddFormTop, AddPostForm } from "./styles";
import {
  KmvFeeling,
  KmvImages,
  KmvVideoCamera,
  ProfileImage,
} from "../../public/images/ImageComponents";
import { ButtonGroup, Divider, Section } from "../../utils/styles";
import { colors, spacing } from "../../utils/variables";
import ActualAddPostForm from "./AddPostForm";
import { useSelector } from "../../redux/hooks";

const backendUrl = "http://localhost:8000";

export default function AddForm({}) {
  const [showForm, setShowForm] = useState(false);
  const state = useSelector((state) => {
    return state.posts;
  });
  const user = useSelector((state) => {
    return state.user.data;
  });

  return (
    <Section>
      {user && (
        <>
          {state.error && <>An Error Occurred</>}
          <AddPostForm>
            <AddFormTop>
              <Link href={`/profile/${user?.id}`}>
                <a>
                  <Image
                    src={
                      user?.profile_image &&
                      `${backendUrl}${user?.profile_image}`
                    }
                    alt={user?.first_name}
                    width={40}
                    height={40}
                  />
                </a>
              </Link>
              <AddButton
                type="button"
                onClick={() => {
                  setShowForm(true);
                }}
              >{`What's On Your Mind? ${user?.first_name}`}</AddButton>
            </AddFormTop>
            <Divider className="divider" />
            <AddFormBottom>
              <ButtonGroup>
                <button type="button">
                  {" "}
                  <span
                    style={{
                      display: "block",
                      marginRight: spacing.sm,
                      color: colors.cherry,
                    }}
                  >
                    <KmvVideoCamera width="1.5em" height={"1.5em"} />
                  </span>
                  Live video
                </button>
                <button type="button">
                  {" "}
                  <span
                    style={{
                      display: "block",
                      marginRight: spacing.sm,
                      color: colors.lime,
                    }}
                  >
                    <KmvImages width="1.5em" height={"1.5em"} />
                  </span>
                  Photo/video
                </button>
                <button type="button">
                  {" "}
                  <span
                    style={{
                      display: "block",
                      marginRight: spacing.sm,
                      color: colors.lemon,
                    }}
                  >
                    <KmvFeeling width="1.5em" height={"1.5em"} />
                  </span>
                  Feeling/activity
                </button>
              </ButtonGroup>
            </AddFormBottom>
            <ActualAddPostForm
              showForm={showForm}
              setShowForm={setShowForm}
              state={state}
            />
          </AddPostForm>
        </>
      )}
    </Section>
  );
}
