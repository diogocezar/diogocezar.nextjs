import { getFileContent } from "@/helpers/markdown";
import { Page, Wrapper } from "@/components/Containers";
import { PortifolioAnimated } from "@/styles/animations";

import ProudToBeenPart from "@/components/Pages/Portfolio/ProudToBeenPart";
import MainCustomers from "@/components/Pages/Portfolio/MainCustomers";
import Musical from "@/components/Pages/Portfolio/Musical";
import Agency from "@/components/Pages/Portfolio/Agency";
import Demos from "@/components/Pages/Portfolio/Demos";

import { ButtonBack } from "@/objects/Button";

import FooterMain from "@/components/Pages/Footer";

const Portfolio = ({ footer }) => {
  return (
    <PortifolioAnimated>
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
      {/* <ButtonBack color="orange" /> */}
    </PortifolioAnimated>
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

export default Portfolio;
