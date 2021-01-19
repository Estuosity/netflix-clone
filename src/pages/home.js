import React from "react";

import { Feature, OptForm } from "../components";
import { HeaderContainer } from "../containers/header";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";
import { Modal } from "../components";

export default function Home() {
  return (
    <>
      <Modal />

      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited filims, TV programs and more</Feature.Title>
          <Feature.SubTitle>
            Watch anywahere. Cancel at any time
          </Feature.SubTitle>

          <OptForm>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership
            </OptForm.Text>
            <OptForm.Break />
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
