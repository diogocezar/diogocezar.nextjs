import React from "react";

import { Section } from "@/components/Containers";
import { RightContent } from "@/components/AlignContent";
import { ListContainer, ListItem } from "@/components/ListContainer";

import Separator from "@/objects/Separator";
import { ListTitle, ListSubTitle, ListContent } from "@/objects/ListContent";
import Link from "@/objects/Link";

const Awards = () => (
  <Section isLast="true">
    <Separator number="07" title="Awards" />
    <RightContent>
      <ListContainer>
        <ListItem color="purple" link={false}>
          <ListTitle>14º APPMARKMIDIA - 2018</ListTitle>
          <ListSubTitle>CREATIVITY AWARD</ListSubTitle>
          <ListContent>
            Second Place - Category: Website / Agency:{" "}
            <Link
              color="orange"
              href="http://www.boyband.com.br"
              rel="noopener noreferrer"
              target="_blank"
            >
              Boyband
            </Link>{" "}
            / Customer:{" "}
            <Link
              color="orange"
              href="http://www.kokar.com.br"
              rel="noopener noreferrer"
              target="_blank"
            >
              Tintas Kokar
            </Link>
          </ListContent>
        </ListItem>
        <ListItem color="purple" link={false}>
          <ListTitle>UTFPR - 2007</ListTitle>
          <ListContent>Award of the best undergraduate student.</ListContent>
        </ListItem>
      </ListContainer>
    </RightContent>
  </Section>
);
export default Awards;
