import React, { useState } from "react";
import { Container, Text, Heading, Close, Inner } from "./styles/modal";

export default function Popup() {
  const [ModalOpen, setModalOpen] = useState(true);

  return ModalOpen ? (
    <Container>
      <Inner>
        <Heading>Welcome! Have a look around</Heading>
        <Text>
          This is my personal project- Netflix Clone
          <br />
          <br />I have disabled SignUp so, please use the SignIn option with
          given credentials for viewing browser page.
          <br />
          <br />
          <br />
          Email: *** <br />
          Password: ***
        </Text>
        <Close onClick={() => setModalOpen((prev) => !prev)}>
          <img src="./images/icons/close.png" alt="Close" />
        </Close>
      </Inner>
    </Container>
  ) : null;
}
