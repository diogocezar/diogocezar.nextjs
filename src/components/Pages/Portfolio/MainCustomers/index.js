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
    <Separator number="02" title="Main Customers" />
    <FullContent>
      <Row>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/twitter.svg" />
            <TitleItemColumn color="orange">Twitter</TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="1rem"
              padding="0 10%"
              align="center"
            >
              Crafted a dynamic website where fans could vote on whether Eto’o
              should play a game for Botafogo or Comercial club, blending sports
              excitement with interactive technology.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/brahma.svg" />
            <TitleItemColumn color="orange">Brahma</TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="1rem"
              padding="0 10%"
              align="center"
            >
              Led the front-end development for the Brahma Valley 2015 edition,
              a vibrant music festival featuring three simultaneous stages and
              Brazil’s top Sertanejo musicians.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/visa.svg" />
            <TitleItemColumn color="orange">Visa</TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="1rem"
              padding="0 10%"
              align="center"
            >
              Developed a competitive web game where pairs raced to use their
              Visa credit cards to purchase products in the shortest time
              possible, combining e-commerce with gamification.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/sonho-de-valsa.svg" />
            <TitleItemColumn color="orange">Sonho de Valsa</TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="1rem"
              padding="0 10%"
              align="center"
            >
              Designed the front-end for a portal dedicated to romantic recipes,
              encouraging couples to cook together and create memorable culinary
              experiences.
            </Paragraph>
          </WrapperCol>
        </Col4>
      </Row>
      <Row>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/volkswagen.svg" />
            <TitleItemColumn color="orange">Volkswagen</TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="1rem"
              padding="0 10%"
              align="center"
            >
              Designed an intuitive front-end layout for Volkswagen accessories,
              encompassing a seamless checkout system, internal pages, and a
              responsive design that adapts flawlessly to any device.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/skol.svg" />
            <TitleItemColumn color="orange">Skol</TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="1rem"
              padding="0 10%"
              align="center"
            >
              Developed an engaging front-end hotsite for an app that maps urban
              workout spots, helping fitness enthusiasts find the best places to
              exercise in their city.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/gillette.svg" />
            <TitleItemColumn color="orange">Gillette</TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="1rem"
              padding="0 10%"
              align="center"
            >
              Created a sleek introductory website for Gillette, allowing users
              to connect to WiFi easily and efficiently.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/lacta.svg" />
            <TitleItemColumn color="orange">Lacta</TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="1rem"
              padding="0 10%"
              align="center"
            >
              Developed a captivating animated hotsite for a promotional
              campaign by Lacta, ensuring an immersive user experience.
            </Paragraph>
          </WrapperCol>
        </Col4>
      </Row>
      <Row>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/subway.svg" />
            <TitleItemColumn color="orange">Subway</TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="1rem"
              padding="0 10%"
              align="center"
            >
              Engineered a comprehensive front-end system where users could
              create their own advertisement videos for Subway, promoting
              creativity and user engagement.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/recco.svg" />
            <TitleItemColumn color="orange">Recco</TitleItemColumn>
            <Paragraph
              size="medium"
              bottom="1rem"
              padding="0 10%"
              align="center"
            >
              Crafted two standout products for Recco: an Anna Hickmann Hotsite
              and a stylish blog dedicated to women’s fashion, both designed to
              captivate and inspire.
            </Paragraph>
          </WrapperCol>
        </Col4>
      </Row>
    </FullContent>
  </Section>
);

export default MainCustomers;
