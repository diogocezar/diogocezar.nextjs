import { getFileContent } from "@/helpers/markdown";
import { Page, Wrapper } from "@/components/Containers";
import { KeepInTouchAnimated } from "@/styles/animations";

import Main from "@/components/Pages/Contact/Main";
import SocialNetworks from "@/components/Pages/Contact/SocialNetworks";
import ContactForm from "@/components/Pages/Contact/ContactForm";

import { ButtonBack } from "@/objects/Button";

import FooterMain from "@/components/Pages/Footer";

const Contact = ({ footer }) => {
  return (
    <KeepInTouchAnimated>
      <Page color="purple">
        <Wrapper>
          <Main />
          <SocialNetworks />
          <ContactForm />
        </Wrapper>
      </Page>
      <FooterMain content={footer} />
      {/* <ButtonBack color="orange" /> */}
    </KeepInTouchAnimated>
  );
};

export async function getStaticProps() {
  const footerContent = getFileContent("content/pages/footer.md");
  return {
    props: {
      footer: footerContent,
    },
  };
}

export default Contact;
