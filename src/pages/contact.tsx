import { Page, Wrapper } from "@/components/Containers";

import Main from "@/components/Pages/Contact/Main";
import SocialNetworks from "@/components/Pages/Contact/SocialNetworks";

import FooterMain from "@/components/Pages/Footer";

const Contact = () => {
  return (
    <>
      <Page color="purple">
        <Wrapper>
          <Main />
        </Wrapper>
      </Page>
      <FooterMain />
    </>
  );
};

export default Contact;
