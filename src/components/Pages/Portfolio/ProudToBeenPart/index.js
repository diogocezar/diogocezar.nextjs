import React from "react";

import { Section } from "@/components/Containers";
import { LeftContent, RightContent } from "@/components/AlignContent";

import Separator from "@/objects/Separator";
import Image from "@/objects/Images";
import { Title } from "@/objects/Titles";
import { QuotedParagraph } from "@/objects/Quotes";
import Link from "@/objects/Link";

const ProudToBeenPart = () => (
  <Section>
    <Separator number="01" title="Portfólio" />
    <LeftContent>
      <Image alt="Diogo Cezar" />
    </LeftContent>
    <RightContent>
      <Title type="internal">Proud to Have Been Part of</Title>
      <QuotedParagraph first="Main Customers" hasQuotedMarks={false}>
        My philosophy is simple: you are what you create. That’s why I’m
        incredibly proud to have been a part of projects for some of Brazil’s
        biggest industry leaders, across diverse sectors.
      </QuotedParagraph>
      <QuotedParagraph first="Musical" hasQuotedMarks={false}>
        I’ve had the privilege of working on a variety of projects for some of
        the biggest names in the Brazilian music scene. Each project demanded a
        blend of skills in planning and execution, allowing me to showcase and
        refine my talents.
      </QuotedParagraph>
      <QuotedParagraph first="Agency Products" hasQuotedMarks={false}>
        I could work as developer with some big agencies like{" "}
        <Link
          type="orange"
          href="http://www.bolha.com.br"
          rel="noopener noreferrer"
          target="_blank"
        >
          Bolha
        </Link>
        ,{" "}
        <Link
          type="orange"
          href="http://www.bolha.com.br"
          rel="noopener noreferrer"
          target="_blank"
        >
          Africa
        </Link>{" "}
        and{" "}
        <Link
          type="orange"
          href="http://www.bolha.com.br"
          rel="noopener noreferrer"
          target="_blank"
        >
          Boyband
        </Link>
        . In this cases, I worked sometimes only with front-end and some times
        as full-stack.
      </QuotedParagraph>
    </RightContent>
  </Section>
);

export default ProudToBeenPart;
