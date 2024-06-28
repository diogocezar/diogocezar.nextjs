import React from "react";

import { Section } from "@/components/Containers";
import { LeftContent, RightContent } from "@/components/AlignContent";

import Separator from "@/objects/Separator";
import Image from "@/objects/Images";
import { Title, SubTitle } from "@/objects/Titles";
import { QuotedParagraph } from "@/objects/Quotes";
import Paragraph from "@/objects/Paragraph";
import Button from "@/objects/Button";
import { ReadCvLogo } from "@phosphor-icons/react";

const AboutMe = () => (
  <Section>
    <Separator number="01" title="About Me" type="orange" />
    <LeftContent>
      <Image alt="Diogo Cezar" />
    </LeftContent>
    <RightContent>
      <Paragraph>
        Since 2003, when I began my studies at UTFPR in Cornélio Procópio,
        development and technology have been integral to my life. During
        college, I created an adaptive hypermedia system using ant colony
        optimization to help users find what they need on websites.
      </Paragraph>
      <Paragraph>
        In 2010, I pursued a master’s degree at UFPR in Curitiba, where I
        developed a smart scheduling system for processing big data in
        distributed environments. Alongside my academic journey, I worked on web
        development projects for various publicity agencies, collaborating with
        numerous Brazilian artists.
      </Paragraph>
      <Paragraph>
        Currently, I serve as the Head of Technology, managing processes,
        translating strategic decisions into software, mentoring my team, and
        designing scalable solutions.
      </Paragraph>
      <Paragraph>
        Technology has always been a constant in my life. I still remember my
        old 486 computer, which brings both nostalgia and a reminder that I’m
        getting older. Encouraged by my father, I’ve always been fascinated by
        understanding how things work. Despite completing various courses, I’ve
        come to believe that the most essential skill for tech professionals is
        the ability to learn how to learn.
      </Paragraph>
      <Button>
        <ReadCvLogo size={23} weight="fill" />
        <div style={{ marginTop: "4px" }}>Download my resume</div>
      </Button>
    </RightContent>
  </Section>
);
export default AboutMe;
