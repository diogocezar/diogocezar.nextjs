import React from "react";

import { Section } from "@/components/Containers";
import { LeftContent, RightContent } from "@/components/AlignContent";

import Separator from "@/objects/Separator";
import Image from "@/objects/Images";
import { Title } from "@/objects/Titles";
import { QuotedParagraph } from "@/objects/Quotes";
import Link from "@/objects/Link";

const Main = () => (
  <Section>
    <Separator number="01" title="Chat with Me" />
    <LeftContent>
      <Image alt="Diogo Cezar" />
    </LeftContent>
    <RightContent>
      <Title type="internal">Let’s Connect</Title>
      <QuotedParagraph first="Get in Touch" hasQuotedMarks={false}>
        I’d love to exchange experiences with you! Whether you have questions,
        want to chat about technology, or are interested in hiring my services,
        feel free to reach out. You can find me at{" "}
        <Link type="orange" href="mailto:diogo@diogocezar.com">
          diogo@diogocezar.com
        </Link>{" "}
        or through the following channels:
      </QuotedParagraph>
    </RightContent>
  </Section>
);

export default Main;
