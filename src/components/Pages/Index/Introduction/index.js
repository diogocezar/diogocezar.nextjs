import React from "react";
import Link from "next/link";

import { Section } from "@/components/Containers";
import { LeftContent, RightContent } from "@/components/AlignContent";

import Separator from "@/objects/Separator";
import Image from "@/objects/Images";
import { Title, SubTitle } from "@/objects/Titles";
import { QuotedParagraph } from "@/objects/Quotes";
import Button from "@/objects/Button";

const Introductions = ({ title, subtitle, biography }) => (
  <Section>
    <Separator number="01" title="Introduction" />
    <LeftContent>
      <Image alt="Diogo Cezar" />
    </LeftContent>
    <RightContent>
      <Title type="main">{title}</Title>
      <SubTitle color="purple-dark">{subtitle}</SubTitle>
      <QuotedParagraph first="Biography">{biography}</QuotedParagraph>
      <Link href="/about">
        <Button type="purple">Read More</Button>
      </Link>
    </RightContent>
  </Section>
);

export default Introductions;
