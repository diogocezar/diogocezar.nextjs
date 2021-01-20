import React, { Component } from "react";

import { Page, Wrapper } from "@/components/Containers";
import { AboutAnimated } from "@/styles/animations";

import AboutMe from "@/components/Pages/About/AboutMe";
import Interests from "@/components/Pages/About/Interests";
import EducationBackground from "@/components/Pages/About/EducationBackground";
import MainProfessionalBackground from "@/components/Pages/About/MainProfessionalBackground";
import Hobbies from "@/components/Pages/About/Hobbies";
import Skills from "@/components/Pages/About/Skills";
import Awards from "@/components/Pages/About/Awards";
import { ButtonBack } from "@/objects/Button";
import FooterMain from "@/components/Pages/Index/Footer";

class About extends Component {
  render() {
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
        <FooterMain />
        {/* <ButtonBack color="orange" /> */}
      </AboutAnimated>
    );
  }
}

export default About;
