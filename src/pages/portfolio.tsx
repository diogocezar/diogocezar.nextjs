import { getFileContent } from "@/helpers/markdown";
import { Page, Wrapper } from "@/components/Containers";

import ProudToBeenPart from "@/components/Pages/Portfolio/ProudToBeenPart";
import MainCustomers from "@/components/Pages/Portfolio/MainCustomers";
import Musical from "@/components/Pages/Portfolio/Musical";
import Agency from "@/components/Pages/Portfolio/Agency";
import Demos from "@/components/Pages/Portfolio/Demos";

import FooterMain from "@/components/Pages/Footer";

const Portfolio = ({ footer }) => {
  return (
    <>
      <Page color="purple-dark">
        <Wrapper>
          <ProudToBeenPart />
          <MainCustomers />
          <Musical />
          <Agency />
        </Wrapper>
      </Page>
      <Page color="orange" decoration={true} decorationColor="orange">
        <Wrapper>
          <Demos />
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

export default Portfolio;
