import { Page, Wrapper } from "@/components/Containers";

import AboutMe from "@/components/Pages/About/AboutMe";
import Interests from "@/components/Pages/About/Interests";
import EducationBackground from "@/components/Pages/About/EducationBackground";
import MainProfessionalBackground from "@/components/Pages/About/MainProfessionalBackground";
import Hobbies from "@/components/Pages/About/Hobbies";
import Skills from "@/components/Pages/About/Skills";
import Awards from "@/components/Pages/About/Awards";
import FooterMain from "@/components/Pages/Footer";

const About = () => {
  return (
    <>
      <Page color="purple-dark">
        <Wrapper>
          <AboutMe />
          <EducationBackground />
          <MainProfessionalBackground />
        </Wrapper>
      </Page>
      <Page color="purple" decoration={true} decorationColor="purple">
        <Wrapper>
          <Hobbies />
          <Awards />
        </Wrapper>
      </Page>
      <FooterMain />
    </>
  );
};

export default About;
