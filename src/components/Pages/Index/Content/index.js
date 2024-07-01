/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { Section } from "@/components/Containers";
import { RightContent } from "@/components/AlignContent";
import { Title } from "@/objects/Titles";
import Separator from "@/objects/Separator";
import Paragraph from "@/objects/Paragraph";

const Content = () => (
  <Section>
    <Separator number="02" title="About me" />
    <RightContent>
      <Title type="main">About me</Title>
      <Paragraph>
        Hello! My name is Diogo Cezar, and I am 38 years old. With over 17 years
        of experience in technology and a Master’s degree in AI, my journey has
        been marked by leading high-performance teams and developing innovative
        solutions for large companies. My passion for sharing knowledge has
        always guided my career, and I have had the honor of working with
        renowned brands such as Twitter, Visa, Volkswagen, and prominent artists
        like Michel Teló and Fernando & Sorocaba.
      </Paragraph>
      <Paragraph>
        My professional journey includes tenures at companies like Neon and
        Luizalabs, where I had the opportunity to lead strategic projects and
        help build efficient and engaged teams. At Neon, we led the creation of
        a digital account for micro-entrepreneurs, reaching 100,000 active
        clients. At Luizalabs, I was the technical reference for the Wallet
        Magalu project, focusing on scalability and efficiency. At Provi, as
        Tech Manager, I improved processes and engagement across three distinct
        teams.
      </Paragraph>
      <Paragraph>
        As the CEO of Typper, one of the top 60 technology startups in Brazil,
        and as the former Head of Technology at Bankme, my mission has always
        been to create a tech culture that promotes team happiness and
        collaboration. I believe that technology has the power to transform
        lives, and I constantly seek ways to apply this power responsibly and
        innovatively.
      </Paragraph>
      <Paragraph>
        I am always open to opportunities where I can apply my experience and
        passion for technology in a technical leadership role. My goal is to
        build efficient and happy teams, create collaborative organizational
        cultures, and continue learning and teaching.
      </Paragraph>
    </RightContent>
  </Section>
);

export default Content;
