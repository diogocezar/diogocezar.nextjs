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
        My professional journey includes tenures at companies like Neon and
        Luizalabs, where I had the opportunity to lead strategic projects and
        help build efficient and engaged teams. At Neon, I spearheaded the
        integration of the Neon account into the MEI Fácil app following our
        company’s first M&A, resulting in the acquisition of 200k customers
        within the first year of launch. At Luizalabs, I was the technical
        reference for the Wallet Magalu project, focusing on scalability and
        efficiency. At Provi, as Tech Manager, I improved processes and
        engagement across three distinct teams.
      </Paragraph>
      <Paragraph>
        As Co-founder and Advisor of Typper, one of the top 100 technology
        startups in Brazil (by F6S), and as the former Head of Technology at
        Bankme, my mission has always been to create a tech culture that
        promotes team happiness and collaboration. I believe that technology has
        the power to transform lives, and I constantly seek ways to apply this
        power responsibly and innovatively.
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
