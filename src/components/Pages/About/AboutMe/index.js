import React from "react";
import Link from "next/link";

import { Section } from "@/components/Containers";
import { LeftContent, RightContent } from "@/components/AlignContent";

import Separator from "@/objects/Separator";
import Image from "@/objects/Images";
import { Title } from "@/objects/Titles";
import Paragraph from "@/objects/Paragraph";
import Button from "@/objects/Button";
import { Download } from "solar-icon-set";

const AboutMe = () => (
  <Section>
    <Separator number="01" title="About Me" />
    <LeftContent>
      <Image alt="Diogo Cezar" />
    </LeftContent>
    <RightContent>
      <Title type="internal">Technology and Leadership</Title>
      <Paragraph>
        From my first steps in development, I found in technology a way to turn
        ideas into reality and help people. My journey has been guided by
        curiosity and a constant desire to learn and share knowledge, leading me
        to specialize in Artificial Intelligence and lead technology teams.
      </Paragraph>
      <Paragraph>
        I believe that technology gives people superpowers, and with great power
        comes great responsibility. This vision inspires me to wake up every day
        excited to think about how I can use my skills to make a difference.
        Creating innovative solutions, especially using AI, is one of my main
        areas of interest and continuous study.
      </Paragraph>
      <Paragraph>
        My commitment to technology goes beyond tools and programming languages;
        it is about building a culture where collaboration and mutual assistance
        are fundamental pillars. I believe in the importance of happy and
        engaged teams, and I strive to create environments where autonomy and
        trust are essential values.
      </Paragraph>
      <Paragraph>
        Seeking new opportunities, I am looking for leadership roles in
        technology that allow me to apply my experience to build
        high-performance teams, always focusing on innovation and customer
        satisfaction. My goal is to grow in technology leadership and continue
        delivering results that make a difference, always guided by honesty,
        respect, and passion for what I do.
      </Paragraph>
      <Link
        href="/assets/docs/diogo-cezar-resume-en.pdf"
        rel="noopener noreferrer"
        target="_blank"
        download="diogo-cezar-resume"
      >
        <Button type="purple">
          <Download size={22} />
          <div style={{ marginLeft: "3px" }}>Download Resume</div>
        </Button>
      </Link>
    </RightContent>
  </Section>
);
export default AboutMe;
