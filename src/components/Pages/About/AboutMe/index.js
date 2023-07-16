import React from "react";

import { Section } from "@/components/Containers";
import { LeftContent, RightContent } from "@/components/AlignContent";

import Separator from "@/objects/Separator";
import Image from "@/objects/Images";
import { Title, SubTitle } from "@/objects/Titles";
import { QuotedParagraph } from "@/objects/Quotes";
import Paragraph from "@/objects/Paragraph";

const AboutMe = () => (
  <Section>
    <Separator number="01" title="About Me" type="orange" />
    <LeftContent>
      <Image alt="Diogo Cezar" />
    </LeftContent>
    <RightContent>
      <Title type="internal" color="purple-dark">
        How is This Guy?
      </Title>
      <QuotedParagraph first="History" hasQuotedMarks={false}>
        Since 2003, when i started my studies at college, development and
        technology are part of my life. As student of UTFPR at Cornélio Procópio
        - Paraná - Brasil, i could develop (among many other things) an
        experimental adaptive hypermedia system based in any colony
        optimisation, to help users to find what they need on website.
      </QuotedParagraph>
      <Paragraph>
        At that moment, I realised that academic environment could be a nice way
        for my professional life. In 2010 I started my master degree course at
        UFPR at Curitiba - Paraná - Brasil, where I finally understand the
        concept of a famous sentence, that sounds like: “more you study, less
        you know”. At master degree, I developed an smart scheduling system
        using planning, to process big data volumes at distributed environment.
      </Paragraph>
      <Paragraph font="sans-serif" bold={true}>
        In parallel with my academic carrier, could be involved with web
        development for many publicity agencies. Where I could develop projects
        for many Brasilian national artists.
      </Paragraph>
      <Paragraph>
        Currently, I work as the Head of Technology, managing and establishing
        processes, translating strategic decisions into software, mentoring and
        guiding the team, and designing consistent and scalable software
        solutions.
      </Paragraph>
      <SubTitle type="internal" color="purple-dark">
        Profession
      </SubTitle>
      <Paragraph>
        Technological stuffs always been present in my life. Still remember my
        old 486, ant it causes me some nostalgia and worry, because I realize
        that im getting old. Always encouraged by my father, I have long been
        interested in understanding how things work. Although I have done
        several courses, I believe that there is an essential skill for
        professionals of technology scenarios: your need learn how to learn.
      </Paragraph>
    </RightContent>
  </Section>
);
export default AboutMe;
