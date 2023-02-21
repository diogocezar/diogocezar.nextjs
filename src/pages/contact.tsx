import { getFileContent } from "@/helpers/markdown";
import { Page, Wrapper } from "@/components/Containers";

import Main from "@/components/Pages/Contact/Main";
import SocialNetworks from "@/components/Pages/Contact/SocialNetworks";

import FooterMain from "@/components/Pages/Footer";

const Contact = ({ footer }) => {
  return (
    <>
      <Page color="purple">
        <Wrapper>
          <Main />
          <SocialNetworks />
        </Wrapper>
      </Page>
      <FooterMain content={footer} />
    </>
  );
};

export async function getStaticProps() {
  const footerContent = getFileContent("src/content/pages/footer.md");
  return {
    props: {
      footer: footerContent.data,
    },
  };
}

export default Contact;
