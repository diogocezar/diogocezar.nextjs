import React from "react";

import { Section } from "@/components/Containers";
import { FullContent } from "@/components/AlignContent";

import Separator from "@/objects/Separator";
import { TitleItemColumn } from "@/objects/Titles";
import { ImageItemColumn } from "@/objects/Images";
import Paragraph from "@/objects/Paragraph";

const MainCustomers = () => (
  <Section>
    <Separator number="02" title="Main Customers" />
    <FullContent>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-10">
        <div className="flex flex-col items-center text-center mb-10">
          <ImageItemColumn src="/assets/images/main-customers/twitter.svg" />
          <TitleItemColumn color="orange">Twitter</TitleItemColumn>
          <Paragraph size="small" align="center">
            Crafted a dynamic website where fans could vote on whether Eto’o
            should play a game for Botafogo or Comercial club, blending sports
            excitement with interactive technology.
          </Paragraph>
        </div>

        <div className="flex flex-col items-center text-center mb-10">
          <ImageItemColumn src="/assets/images/main-customers/brahma.svg" />
          <TitleItemColumn color="orange">Brahma</TitleItemColumn>
          <Paragraph size="small" align="center">
            Led the front-end development for the Brahma Valley 2015 edition, a
            vibrant music festival featuring three simultaneous stages and
            Brazil’s top Sertanejo musicians.
          </Paragraph>
        </div>

        <div className="flex flex-col items-center text-center mb-10">
          <ImageItemColumn src="/assets/images/main-customers/visa.svg" />
          <TitleItemColumn color="orange">Visa</TitleItemColumn>
          <Paragraph size="small" align="center">
            Developed a competitive web game where pairs raced to use their Visa
            credit cards to purchase products in the shortest time possible,
            combining e-commerce with gamification.
          </Paragraph>
        </div>

        <div className="flex flex-col items-center text-center mb-10">
          <ImageItemColumn src="/assets/images/main-customers/sonho-de-valsa.svg" />
          <TitleItemColumn color="orange">Sonho de Valsa</TitleItemColumn>
          <Paragraph size="small" align="center">
            Designed the front-end for a portal dedicated to romantic recipes,
            encouraging couples to cook together and create memorable culinary
            experiences.
          </Paragraph>
        </div>

        <div className="flex flex-col items-center text-center mb-10">
          <ImageItemColumn src="/assets/images/main-customers/volkswagen.svg" />
          <TitleItemColumn color="orange">Volkswagen</TitleItemColumn>
          <Paragraph size="small" align="center">
            Designed an intuitive front-end layout for Volkswagen accessories,
            encompassing a seamless checkout system, internal pages, and a
            responsive design that adapts flawlessly to any device.
          </Paragraph>
        </div>

        <div className="flex flex-col items-center text-center mb-10">
          <ImageItemColumn src="/assets/images/main-customers/skol.svg" />
          <TitleItemColumn color="orange">Skol</TitleItemColumn>
          <Paragraph size="small" align="center">
            Developed an engaging front-end hotsite for an app that maps urban
            workout spots, helping fitness enthusiasts find the best places to
            exercise in their city.
          </Paragraph>
        </div>

        <div className="flex flex-col items-center text-center mb-10">
          <ImageItemColumn src="/assets/images/main-customers/gillette.svg" />
          <TitleItemColumn color="orange">Gillette</TitleItemColumn>
          <Paragraph size="small" align="center">
            Created a sleek introductory website for Gillette, allowing users to
            connect to WiFi easily and efficiently.
          </Paragraph>
        </div>

        <div className="flex flex-col items-center text-center mb-10">
          <ImageItemColumn src="/assets/images/main-customers/lacta.svg" />
          <TitleItemColumn color="orange">Lacta</TitleItemColumn>
          <Paragraph size="small" align="center">
            Developed a captivating animated hotsite for a promotional campaign
            by Lacta, ensuring an immersive user experience.
          </Paragraph>
        </div>
      </div>
    </FullContent>
  </Section>
);

export default MainCustomers;
