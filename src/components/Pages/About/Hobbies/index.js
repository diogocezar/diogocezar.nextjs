import React from "react";

import { Section } from "@/components/Containers";
import { RightContent } from "@/components/AlignContent";
import { ListContainer, ListItem } from "@/components/ListContainer";

import Separator from "@/objects/Separator";
import { ListTitle, ListContent } from "@/objects/ListContent";
import Link from "@/objects/Link";

const Hobbies = () => (
  <Section>
    <Separator number="04" title="Hobbies" />
    <RightContent>
      <ListContainer>
        <ListItem color="purple" link={false}>
          <ListTitle>MUSIC</ListTitle>
          <ListContent>Im a guitar/bass player.</ListContent>
        </ListItem>
        <ListItem color="purple" link={false}>
          <ListTitle>GAMMING</ListTitle>
          <ListContent>
            Love it, but I really like the hard ones, like{" "}
            <Link
              type="orange"
              href="https://pt.wikipedia.org/wiki/Demon%27s_Souls"
              rel="noopener noreferrer"
              target="_blank"
            >
              Demon Souls
            </Link>
            ,{" "}
            <Link
              type="orange"
              href="https://pt.wikipedia.org/wiki/Dark_Souls"
              rel="noopener noreferrer"
              target="_blank"
            >
              Darks Souls I, II, III
            </Link>
            ,{" "}
            <Link
              href="https://pt.wikipedia.org/wiki/Bloodborne"
              rel="noopener noreferrer"
              target="_blank"
            >
              Bloodborne
            </Link>
            ,{" "}
            <Link
              href="https://pt.wikipedia.org/wiki/Sekiro"
              rel="noopener noreferrer"
              target="_blank"
            >
              Sekiro
            </Link>{" "}
            and{" "}
            <Link
              href="https://pt.wikipedia.org/wiki/Elden_Ring"
              rel="noopener noreferrer"
              target="_blank"
            >
              Elden Ring
            </Link>
            .
          </ListContent>
        </ListItem>
      </ListContainer>
    </RightContent>
  </Section>
);
export default Hobbies;
