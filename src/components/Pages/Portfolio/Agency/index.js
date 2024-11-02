import React from "react";

import { Section } from "@/components/Containers";
import { FullContent } from "@/components/AlignContent";

import Separator from "@/objects/Separator";
import { TitleItemColumn } from "@/objects/Titles";
import { ImageItemColumn } from "@/objects/Images";
import Paragraph from "@/objects/Paragraph";

const Agency = () => (
  <Section>
    <Separator number="04" title="Agency" />
    <FullContent>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-10">
        <div className="flex flex-col items-center text-center mb-10">
          <ImageItemColumn src="/assets/images/agency/esss.svg" />
          <TitleItemColumn color="orange">ESSS</TitleItemColumn>
          <Paragraph size="small" align="center">
            Engineered the entire front-end and contributed to the back-end for
            ESSS&apos;s comprehensive website.
          </Paragraph>
        </div>

        <div className="flex flex-col items-center text-center mb-10">
          <ImageItemColumn src="/assets/images/agency/products-of-tomorrow.jpg" />
          <TitleItemColumn color="orange">Products of Tomorrow</TitleItemColumn>
          <Paragraph size="small" align="center">
            Managed the advanced features of a promotional website for Africa
            Agency&apos;s &apos;Products of Tomorrow&apos; campaign.
          </Paragraph>
        </div>

        <div className="flex flex-col items-center text-center mb-10">
          <ImageItemColumn src="/assets/images/agency/hardera.svg" />
          <TitleItemColumn color="orange">Hardera</TitleItemColumn>
          <Paragraph size="small" align="center">
            Crafted a robust website for Hardera, a leading wood company.
          </Paragraph>
        </div>

        <div className="flex flex-col items-center text-center mb-10">
          <ImageItemColumn src="/assets/images/agency/kokar.svg" />
          <TitleItemColumn color="orange">Kokar</TitleItemColumn>
          <Paragraph size="small" align="center">
            Developed an innovative digital solution for Kokar, a prominent
            paint company.
          </Paragraph>
        </div>

        <div className="flex flex-col items-center text-center mb-10">
          <ImageItemColumn src="/assets/images/agency/angie.svg" />
          <TitleItemColumn color="orange">Angie</TitleItemColumn>
          <Paragraph size="small" align="center">
            Designed a playful and engaging website for Angie&apos;s range of
            children&apos;s dental products.
          </Paragraph>
        </div>

        <div className="flex flex-col items-center text-center mb-10">
          <ImageItemColumn src="/assets/images/agency/boyband.svg" />
          <TitleItemColumn color="orange">Boyband</TitleItemColumn>
          <Paragraph size="small" align="center">
            Developed numerous websites for Boyband, each tailored to unique
            campaigns and initiatives.
          </Paragraph>
        </div>
      </div>
    </FullContent>
  </Section>
);

export default Agency;
