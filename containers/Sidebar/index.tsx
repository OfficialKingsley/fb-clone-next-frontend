import React from "react";

import { Container } from "./styles";

export default function Sidebar({ hidden }) {
  return (
    <Container hidden={hidden}>
      <h3>I will change a few features</h3>
      <ul>
        <li>
          I am not done with the project but school has resumed. However, I will
          be updating from time to time
        </li>
        <h4>I will fix the following</h4>
        <li>No error messages</li>
        <li>Registration form difficult to close</li>
        <li>Pictures not showing</li>
        <li>Ability to add comments and share</li>
        <li>Edit info on the sidebar</li>
        <li>Changing read state of notifications</li>
        <li>Refactor code</li>
      </ul>
    </Container>
  );
}
