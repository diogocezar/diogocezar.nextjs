import React from "react";

import { Section } from "@/components/Containers";
import { RightContent } from "@/components/AlignContent";

import Separator from "@/objects/Separator";
import { QuotedParagraph } from "@/objects/Quotes";
import Paragraph from "@/objects/Paragraph";
import Button from "@/objects/Button";
import Link from "@/objects/Link";
import { GithubLogo } from "@phosphor-icons/react";

const GitHub = () => (
  <Section>
    <Separator number="02" title="GitHub" type="orange" />
    <RightContent>
      <QuotedParagraph first="GitHub" hasQuotedMarks={false}>
        Every developer needs to master project management, and Git is an
        essential tool for this.
      </QuotedParagraph>
      <Paragraph>
        I use my GitHub for various purposes, but it’s also a public space where
        I experiment with new technologies. Feel free to explore my projects and
        see what I’m working on. 😉
      </Paragraph>
      <Link
        href="https://github.com/diogocezar"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Button>
          <GithubLogo size={23} weight="fill" />
          <div style={{ marginTop: "4px" }}>Go to My GitHub</div>
        </Button>
      </Link>
    </RightContent>
  </Section>
);
export default GitHub;
