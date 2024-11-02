import React from "react";

import { Section } from "@/components/Containers";
import { FullContent } from "@/components/AlignContent";
import { Row, Col4, WrapperCol } from "@/components/Grid";

import Button from "@/objects/Button";
import Separator from "@/objects/Separator";
import { TitleItemColumn } from "@/objects/Titles";
import { ImageItemColumn } from "@/objects/Images";
import Link from "@/objects/Link";
import { Plus } from "@phosphor-icons/react";

const SocialNetworks = () => (
  <Section>
    <Separator number="02" title="Social Networks" />
    <FullContent>
      <Row>
        <Col4>
          <WrapperCol>
            <Link
              href="https://github.com/diogocezar/"
              buttonCenter={true}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ImageItemColumn src="/assets/images/social-networks/github.svg" />
            </Link>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <Link
              href="https://twitter.com/diogocezar"
              buttonCenter={true}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ImageItemColumn src="/assets/images/social-networks/twitter.svg" />
            </Link>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <Link
              href="https://www.instagram.com/diogocezar.dev/"
              buttonCenter={true}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ImageItemColumn src="/assets/images/social-networks/instagram.svg" />
            </Link>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <Link
              href="https://www.linkedin.com/in/diogocezar/"
              buttonCenter={true}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ImageItemColumn src="/assets/images/social-networks/linkedin.svg" />
            </Link>
          </WrapperCol>
        </Col4>
      </Row>
    </FullContent>
  </Section>
);

export default SocialNetworks;
