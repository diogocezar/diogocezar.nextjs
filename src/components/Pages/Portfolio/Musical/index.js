import React from "react";

import { Section } from "@/components/Containers";
import { FullContent } from "@/components/AlignContent";
import { Row, Col4, WrapperCol } from "@/components/Grid";

import Separator from "@/objects/Separator";
import { TitleItemColumn } from "@/objects/Titles";
import { ImageItemColumn } from "@/objects/Images";
import Paragraph from "@/objects/Paragraph";

const MainCustomers = () => (
  <Section>
    <Separator number="03" title="Musical" />
    <FullContent>
      <Row>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/musical/michel-telo.jpg" />
            <TitleItemColumn color="orange">Michel Teló</TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="1rem"
              padding="0 10%"
              align="center"
            >
              Designed the official website for international sensation Michel
              Teló, bringing his vibrant music presence online.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/musical/fernando-e-sorocaba.jpg" />
            <TitleItemColumn color="orange">
              Fernando & Sorocaba
            </TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="1rem"
              padding="0 10%"
              align="center"
            >
              Created an interactive system for fans to feature their photos
              with hashtags on the duo&apos;s official site, enhancing fan
              engagement.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/musical/jads-e-jadson.jpg" />
            <TitleItemColumn color="orange">Jads & Jadson</TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="1rem"
              padding="0 10%"
              align="center"
            >
              Developed the entire official website for Jads & Jadson,
              showcasing their musical journey.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/musical/thaeme-e-thiago.jpg" />
            <TitleItemColumn color="orange">Thaeme & Thiago</TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="1rem"
              padding="0 10%"
              align="center"
            >
              Created a vibrant hotsite with seamless social media integration
              for Thaeme & Thiago, connecting fans with the duo.
            </Paragraph>
          </WrapperCol>
        </Col4>
      </Row>
      <Row>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/musical/inimigos-da-hp.jpg" />
            <TitleItemColumn color="orange">Inimigos da HP</TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="1rem"
              padding="0 10%"
              align="center"
            >
              Designed a survey system for Inimigos da HP, engaging fans before
              the launch of their main website.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/musical/marcos-e-belutti.jpg" />
            <TitleItemColumn color="orange">Marcos & Belutti</TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="1rem"
              padding="0 10%"
              align="center"
            >
              Developed a series of promotional hotsites for Marcos & Belutti,
              boosting their online presence.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/musical/henrique-e-diego.jpg" />
            <TitleItemColumn color="orange">Henrique & Diego</TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="1rem"
              padding="0 10%"
              align="center"
            >
              Created multiple hotsites for Henrique & Diego, including engaging
              promotional actions with raffle systems.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/musical/joao-gustavo-e-murilo.jpg" />
            <TitleItemColumn color="orange">
              João Gustavo & Murilo
            </TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="1rem"
              padding="0 10%"
              align="center"
            >
              Developed the comprehensive main website for João Gustavo &
              Murilo, featuring exciting promotional activities.
            </Paragraph>
          </WrapperCol>
        </Col4>
      </Row>
    </FullContent>
  </Section>
);
export default MainCustomers;
