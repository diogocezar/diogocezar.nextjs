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
        With over 17 years of experience in the technology field and a master's
        degree in Artificial Intelligence, I have always been driven by a
        passion for education. As a former professor, I had the privilege of
        teaching a wide range of fundamental subjects in computer science and
        engineering. My academic interests are focused on Evolutionary
        Computation and Artificial Intelligence.
      </Paragraph>
      <Paragraph>
        In my professional journey, I have had the opportunity to work with
        prominent companies and deliver projects for renowned names in the music
        industry, including Michel Teló, Fernando e Sorocaba, Inimigos da HP,
        Marcos e Belutti, Henrique e Diego, Thaeme e Thiago, and Jads e Jadson.
      </Paragraph>
      <Paragraph>
        I have also worked on technology projects for esteemed companies such as
        Twitter, Brahma, Sonho de Valsa, Volks, Skol, Visa, and Gillette. One of
        the highlights of my career was participating in a Hackathon at the Big
        Brother Brasil house, which provided a unique and exciting experience.
      </Paragraph>
      <Paragraph>
        As one of the pioneers in shaping the technology culture at MEI Fácil, I
        played a key role in establishing a strong foundation that contributed
        to the subsequent acquisition of the company by Neon Bank. During my
        time at Neon Bank, I led a significant project, creating a comprehensive
        digital account tailored for micro-entrepreneurs in Brazil. Serving as
        the Tech Lead for a super-squad, I oversaw the transformation of this
        team into over 10 new teams, delivering remarkable results.
      </Paragraph>
      <Paragraph>
        My journey continued at Magazine Luiza, where I gained valuable insights
        into the workings of a BigTech company. This experience allowed me to
        further develop my technical skills as a Tech Lead, supporting multiple
        squads within a Tribe. I actively participated in the Upstream and
        Downstream phases, refining and preparing features, and contributing to
        documentation, proof-of-concepts (POCs), and monitoring. Notably, I
        contributed to the development of a feature that introduced the Wallet
        functionality within MagaluPay.
      </Paragraph>
      <Paragraph>
        At Provi, I returned to a slightly smaller environment but assumed the
        responsibilities of a Manager. Here, my primary focus was on empowering
        the teams I led to improve their processes and achieve higher levels of
        quality and performance. Now, I have the privilege of joining Bankme,
        where I can fulfill a long-held dream of building a tech culture and
        leveraging my extensive technology background.
      </Paragraph>
      <Paragraph>
        Lastly, I take great pride in our side project, Typper. This project,
        which we work on in our spare time, serves as a platform for us to apply
        real-world learnings, continuously improving our business skills.
      </Paragraph>
    </RightContent>
  </Section>
);

export default Content;
