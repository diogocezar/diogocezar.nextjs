import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";

import { Section } from "@/components/Containers";
import { LeftContent, RightContent } from "@/components/AlignContent";

import Separator from "@/objects/Separator";
import Image from "@/objects/Images";
import { Title, SubTitle } from "@/objects/Titles";
import { QuotedParagraph } from "@/objects/Quotes";
import Button from "@/objects/Button";
import { Calendar } from "solar-icon-set";

const Introductions = () => {
  const subtitleOptions = useMemo(
    () => [
      "Technology Leader",
      "Mentor",
      "Teacher",
      "Head of Technology",
      "Developer",
    ],
    [],
  );

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
      }, 400);
    }, 2000);
    return () => clearInterval(interval);
  }, [subtitleOptions]);

  return (
    <Section>
      <Separator number="01" title="Introduction" />
      <LeftContent>
        <Image alt="Diogo Cezar" />
      </LeftContent>
      <RightContent>
        <Title type="main">Diogo Cezar</Title>
        <SubTitle
          color="white"
          className={`fade-custom ${isVisible ? "visible-custom" : "hidden-custom"}`}
        >
          {subtitleOptions[currentSubtitleIndex]}
        </SubTitle>
        <QuotedParagraph first="How i am?">
          I’m a guy who thrives on the belief that knowing nothing fuels my
          endless curiosity. As a teacher, speaker, developer, and tech
          enthusiast, I am constantly seeking new challenges.
        </QuotedParagraph>
        <Link
          href="https://diocodes.dev"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button type="purple">
            <Calendar size={26} />
            <div style={{ marginTop: "3px", marginLeft: "2px" }}>
              Free Mentoring
            </div>
          </Button>
        </Link>
      </RightContent>
    </Section>
  );
};

export default Introductions;
