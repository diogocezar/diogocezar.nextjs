import React from "react";

import { Section } from "@/components/Containers";
import { FullContent } from "@/components/AlignContent";
import { Row, Col4, WrapperCol } from "@/components/Grid";

import Separator from "@/objects/Separator";
import { TitleItemColumn } from "@/objects/Titles";
import { ImageItemColumn } from "@/objects/Images";
import Paragraph from "@/objects/Paragraph";

const Agency = () => (
  <Section>
    <Separator number="04" title="Agency" />
    <FullContent>
      <Row>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/agency/esss.svg" />
            <TitleItemColumn color="orange">ESSS</TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="1rem"
              padding="0 10%"
              align="center"
            >
              Engineered the entire front-end and contributed to the back-end
              for ESSS&apos;s comprehensive website.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/agency/products-of-tomorrow.jpg" />
            <TitleItemColumn color="orange">
              Products of Tomorrow
            </TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="1rem"
              padding="0 10%"
              align="center"
            >
              Managed the advanced features of a promotional website for Africa
              Agency&apos;s &apos;Products of Tomorrow&apos; campaign.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/agency/hardera.svg" />
            <TitleItemColumn color="orange">Hardera</TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="1rem"
              padding="0 10%"
              align="center"
            >
              Crafted a robust website for Hardera, a leading wood company.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/agency/kokar.svg" />
            <TitleItemColumn color="orange">Kokar</TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="1rem"
              padding="0 10%"
              align="center"
            >
              Developed an innovative digital solution for Kokar, a prominent
              paint company.
            </Paragraph>
          </WrapperCol>
        </Col4>
      </Row>
      <Row>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/agency/angie.svg" />
            <TitleItemColumn color="orange">Angie</TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="1rem"
              padding="0 10%"
              align="center"
            >
              Designed a playful and engaging website for Angie&apos;s range of
              children&apos;s dental products.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/agency/boyband.svg" />
            <TitleItemColumn color="orange">Boyband</TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="1rem"
              padding="0 10%"
              align="center"
            >
              Developed numerous websites for Boyband, each tailored to unique
              campaigns and initiatives.
            </Paragraph>
          </WrapperCol>
        </Col4>
      </Row>
    </FullContent>
  </Section>
);

export default Agency;
