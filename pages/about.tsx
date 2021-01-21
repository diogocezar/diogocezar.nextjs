import { getFileContent } from "@/helpers/markdown";
import { Page, Wrapper } from "@/components/Containers";
import { AboutAnimated } from "@/styles/animations";

import AboutMe from "@/components/Pages/About/AboutMe";
import Interests from "@/components/Pages/About/Interests";
import EducationBackground from "@/components/Pages/About/EducationBackground";
import MainProfessionalBackground from "@/components/Pages/About/MainProfessionalBackground";
import Hobbies from "@/components/Pages/About/Hobbies";
import Skills from "@/components/Pages/About/Skills";
import Awards from "@/components/Pages/About/Awards";
import FooterMain from "@/components/Pages/Footer";

const About = ({ footer }) => {
  return (
    <AboutAnimated>
      <Page color="orange">
        <Wrapper>
          <AboutMe />
          <Interests />
          <EducationBackground />
          <MainProfessionalBackground />
        </Wrapper>
      </Page>
      <Page color="purple" decoration={true} decorationColor="purple">
        <Wrapper>
          <Hobbies />
          <Skills />
          <Awards />
        </Wrapper>
      </Page>
      <FooterMain content={footer} />
    </AboutAnimated>
  );
};

export async function getStaticProps() {
  const footerContent = getFileContent("content/pages/footer.md");
  return {
    props: {
      footer: footerContent.data,
    },
  };
}

export default About;
