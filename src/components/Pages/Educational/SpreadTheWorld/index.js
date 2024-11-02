import React from "react";

import { Section } from "@/components/Containers";
import { LeftContent, RightContent } from "@/components/AlignContent";

import Separator from "@/objects/Separator";
import Image from "@/objects/Images";
import { Title } from "@/objects/Titles";
import { QuotedParagraph } from "@/objects/Quotes";
import Paragraph from "@/objects/Paragraph";

const SpreadTheWorld = () => (
  <Section>
    <Separator number="01" title="Educational" />
    <LeftContent>
      <Image alt="Diogo Cezar" />
    </LeftContent>
    <RightContent>
      <Title type="internal">Where i Spread the Word of Development</Title>
      <QuotedParagraph first="Journey of Share" hasQuotedMarks={false}>
        The best way to learn is by teaching others. Throughout my journey, I’ve
        embraced this philosophy in many forms: as a teacher, speaker, and
        through video courses. The method doesn’t matter, as long as you’re
        helping someone. 😉
      </QuotedParagraph>
      <Paragraph font="sans-serif" bold={true}>
        This space is dedicated to cataloging and remembering my efforts to
        spread the knowledge of development. You’ll also find some downloadable
        content to explore.
      </Paragraph>
    </RightContent>
  </Section>
);
export default SpreadTheWorld;
