import React from "react";
import Link from "next/link";

import { Section } from "@/components/Containers";
import { LeftContent, RightContent } from "@/components/AlignContent";

import Separator from "@/objects/Separator";
import Image from "@/objects/Images";
import { Title, SubTitle } from "@/objects/Titles";
import { QuotedParagraph } from "@/objects/Quotes";
import Button from "@/objects/Button";
import { Calendar } from "@phosphor-icons/react";

const Introductions = ({ title, subtitle, biography }) => (
  <Section>
    <Separator number="01" title="Introduction" />
    <LeftContent>
      <Image alt="Diogo Cezar" />
    </LeftContent>
    <RightContent>
      <Title type="main">{title}</Title>
      <SubTitle color="white">{subtitle}</SubTitle>
      <QuotedParagraph first="How i am?">{biography}</QuotedParagraph>
      <Link
        href="https://diocodes.dev"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Button type="purple">
          <Calendar size={23} />
          <div style={{ marginTop: "3px" }}>Free Mentoring</div>
        </Button>
      </Link>
    </RightContent>
  </Section>
);

export default Introductions;
