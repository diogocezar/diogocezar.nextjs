/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { Section } from "@/components/Containers";
import { RightContent } from "@/components/AlignContent";
import { Title } from "@/objects/Titles";
import Separator from "@/objects/Separator";
import Paragraph from "@/objects/Paragraph";

const Content = () => (
  <Section>
    <Separator number="02" title="Short Story" />
    <RightContent>
      <Title type="main">Short Story</Title>
      <Paragraph>
        With over 17 years of experience in the tech field and a master’s degree
        in AI, my passion for education has always driven me. As a former
        professor, I had the privilege of teaching a wide range of computer
        science and engineering subjects, focusing on Evolutionary Computation
        and AI. My professional journey includes collaborations with prominent
        companies and renowned names in the music industry, such as Michel Teló,
        Fernando e Sorocaba, and others.
      </Paragraph>
      <Paragraph>
        I’ve worked on tech projects for esteemed companies like Twitter,
        Brahma, and Visa, with one career highlight being a Hackathon at the Big
        Brother Brasil house. As a pioneer in shaping MEI Fácil’s tech culture,
        I played a key role in its acquisition by Neon Bank. At Neon, I led a
        significant project to create a comprehensive digital account for
        micro-entrepreneurs, transforming a super-squad into over ten new teams
        and delivering remarkable results.
      </Paragraph>
      <Paragraph>
        At Luizalabs, I gained insights into BigTech operations as a Tech Lead,
        supporting multiple squads within a Tribe. I contributed to various
        phases, from feature preparation to documentation and monitoring,
        including the development of a Wallet functionality for MagaluPay. My
        journey then took me to Provi, where I focused on empowering teams to
        improve their processes and achieve higher performance.
      </Paragraph>
      <Paragraph>
        At Bankme, I’m fulfilling a long-held dream of building a tech culture
        while leveraging my extensive background. Additionally, I take great
        pride in Typper, our side project, which allows us to apply real-world
        learnings and continuously improve our business skills.
      </Paragraph>
    </RightContent>
  </Section>
);

export default Content;
