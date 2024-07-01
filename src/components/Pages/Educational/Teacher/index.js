import React from "react";

import { Section } from "@/components/Containers";
import { RightContent } from "@/components/AlignContent";

import Separator from "@/objects/Separator";
import Paragraph from "@/objects/Paragraph";
import Button from "@/objects/Button";
import Link from "@/objects/Link";
import { GraduationCap } from "@phosphor-icons/react/dist/ssr";

const GitHub = () => (
  <Section>
    <Separator number="03" title="Teacher" type="orange" />
    <RightContent>
      <Paragraph>
        As a teacher, I’ve gathered a wealth of materials that could be
        invaluable for students and enthusiasts alike. I’ve organized all of
        these resources in a GitHub repository. You can check it out by
        accessing:
      </Paragraph>
      <Link
        href="https://github.com/diogocezar/dctb-utfpr"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Button bottom="4rem">
          <GraduationCap size={23} />
          <div style={{ marginTop: "4px" }}>Check Contents</div>
        </Button>
      </Link>
    </RightContent>
  </Section>
);
export default GitHub;
