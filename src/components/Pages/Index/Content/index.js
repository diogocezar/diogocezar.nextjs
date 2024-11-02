/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { Section } from "@/components/Containers";
import { RightContent } from "@/components/AlignContent";
import { Title } from "@/objects/Titles";
import Separator from "@/objects/Separator";
import Paragraph from "@/objects/Paragraph";
import Button from "@/objects/Button";
import Link from "next/link";
import { AddressBook } from "@phosphor-icons/react";

const getAge = () => {
  const birthDate = new Date(1986, 1, 19); // Ano, mês (0-indexed), dia
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

const getXp = () => {
  const startYear = 2007;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

const Content = () => (
  <Section>
    <Separator number="02" title="About me" />
    <RightContent>
      <Title type="main">Hello!</Title>
      <Paragraph>
        My name is Diogo Cezar, and I am {getAge()} years old. With over{" "}
        {getXp()} years of experience in technology and a Master’s degree in AI,
        my journey has been marked by leading high-performance teams and
        developing innovative solutions for large companies.
      </Paragraph>
      <Paragraph>
        My passion for sharing knowledge has always guided my career, and I have
        had the honor of working with renowned brands such as Twitter, Visa,
        Volkswagen, and prominent artists like Michel Teló and Fernando &
        Sorocaba.
      </Paragraph>
      <Paragraph>
        I’ve led strategic projects and fostered team engagement at companies
        like Neon, Luizalabs, and Provi, driving impactful outcomes such as
        integrating the Neon account into MEI Fácil—gaining 200k new customers
        in a year—and scaling Luizalabs’ Wallet Magalu project. As a Co-founder
        of Typper, named a top 100 Brazilian tech startup, and former Head of
        Technology at Bankme, I focus on building a tech culture that values
        team happiness, collaboration, and impactful, responsible innovation.
      </Paragraph>
      <Paragraph>
        I am always open to opportunities where I can apply my experience and
        passion for technology in a technical leadership role. My goal is to
        build efficient and happy teams, create collaborative organizational
        cultures, and continue learning and teaching.
      </Paragraph>
      <Link href="/about">
        <Button type="purple">
          <AddressBook size={23} />
          <div style={{ marginTop: "3px" }}>More About Me</div>
        </Button>
      </Link>
    </RightContent>
  </Section>
);

export default Content;
