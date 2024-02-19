import React from "react";

import { Section } from "@/components/Containers";
import { RightContent } from "@/components/AlignContent";

import Separator from "@/objects/Separator";
import { QuotedParagraph } from "@/objects/Quotes";
import Paragraph from "@/objects/Paragraph";
import Button from "@/objects/Button";
import Link from "@/objects/Link";

const GitHub = () => (
  <Section>
    <Separator number="02" title="GitHub" type="orange" />
    <RightContent>
      <QuotedParagraph first="GitHub" hasQuotedMarks={false}>
        If you are developer you really need to know how to manage your
        projects, git is a great tool for this.
      </QuotedParagraph>
      <Paragraph>
        I use my GitHub for many proposes, but there is a public study place,
        where I tri to experiment new technologies.
      </Paragraph>
      <Paragraph>Please, check it out ;)</Paragraph>
      <Link
        href="https://github.com/diogocezar"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Button>Go to My GitHub</Button>
      </Link>
    </RightContent>
  </Section>
);
export default GitHub;
