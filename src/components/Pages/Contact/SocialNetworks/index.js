import React from "react";

import { Section } from "@/components/Containers";
import { FullContent } from "@/components/AlignContent";
import { Row, Col4, WrapperCol } from "@/components/Grid";

import Button from "@/objects/Button";
import Separator from "@/objects/Separator";
import { TitleItemColumn } from "@/objects/Titles";
import { ImageItemColumn } from "@/objects/Images";
import Paragraph from "@/objects/Paragraph";
import Link from "@/objects/Link";
import { Plus } from "@phosphor-icons/react";

const SocialNetworks = () => (
  <Section>
    <Separator number="02" title="Social Networks" />
    <FullContent>
      <Row>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/social-networks/github.svg" />
            <TitleItemColumn color="orange">GitHub</TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="0"
              padding="0 10%"
              minheight="85px"
              align="center"
            >
              GitHub is my playground for sharing projects and exploring new
              technologies as a developer.
            </Paragraph>
            <Link
              href="https://github.com/diogocezar/"
              buttonCenter={true}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button type="orange" right="0px">
                <Plus size={23} weight="fill" />
                <div style={{ marginTop: "4px" }}>Add Me</div>
              </Button>
            </Link>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/social-networks/twitter.svg" />
            <TitleItemColumn color="orange">Twitter</TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="0"
              padding="0 10%"
              minheight="85px"
              align="center"
            >
              On Twitter, I share insights, thoughts, and highlight links from
              the world of development.
            </Paragraph>
            <Link
              href="https://twitter.com/diogocezar"
              buttonCenter={true}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button type="orange" right="0px">
                <Plus size={23} weight="fill" />
                <div style={{ marginTop: "4px" }}>Add Me</div>
              </Button>
            </Link>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/social-networks/instagram.svg" />
            <TitleItemColumn color="orange">Instagram</TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="0"
              padding="0 10%"
              minheight="85px"
              align="center"
            >
              Instagram is where I share snapshots of my daily life and
              adventures.
            </Paragraph>
            <Link
              href="https://www.instagram.com/diogocezar.dev/"
              buttonCenter={true}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button type="orange" right="0px">
                <Plus size={23} weight="fill" />
                <div style={{ marginTop: "4px" }}>Add Me</div>
              </Button>
            </Link>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/social-networks/linkedin.svg" />
            <TitleItemColumn color="orange">LinkedIn</TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="0"
              padding="0 10%"
              minheight="85px"
              align="center"
            >
              LinkedIn showcases my professional journey and achievements.
            </Paragraph>
            <Link
              href="https://www.linkedin.com/in/diogocezar/"
              buttonCenter={true}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button type="orange" right="0px">
                <Plus size={23} weight="fill" />
                <div style={{ marginTop: "4px" }}>Add Me</div>
              </Button>
            </Link>
          </WrapperCol>
        </Col4>
      </Row>
    </FullContent>
  </Section>
);

export default SocialNetworks;
