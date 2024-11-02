import React, { useState, useEffect } from "react";
import Link from "next/link";

import { Section } from "@/components/Containers";
import { LeftContent, RightContent } from "@/components/AlignContent";

import Separator from "@/objects/Separator";
import Image from "@/objects/Images";
import { Title, SubTitle } from "@/objects/Titles";
import { QuotedParagraph } from "@/objects/Quotes";
import Button from "@/objects/Button";
import { Calendar } from "@phosphor-icons/react";

const Introductions = ({ title, subtitleOptions, biography }) => {
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSubtitleIndex(
          (prevIndex) => (prevIndex + 1) % subtitleOptions.length,
        );
        setIsVisible(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [subtitleOptions]);

  return (
    <Section>
      <Separator number="01" title="Introduction" />
      <LeftContent>
        <Image alt="Diogo Cezar" />
      </LeftContent>
      <RightContent>
        <Title type="main">{title}</Title>
        <SubTitle
          color="white"
          className={`fade ${isVisible ? "visible" : "hidden"}`}
        >
          {subtitleOptions[currentSubtitleIndex]}
        </SubTitle>
        <QuotedParagraph first="How i am?">{biography}</QuotedParagraph>
        <Link
          href="https://diocodes.dev"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button type="purple">
            <Calendar size={23} />
            <div style={{ marginTop: "3px" }}>Free Mentoring</div>
          </Button>
        </Link>
      </RightContent>
    </Section>
  );
};

export default Introductions;
