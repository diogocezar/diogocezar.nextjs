import React from "react";

import { Section } from "@/components/Containers";
import {
  RightContent,
  LeftContentList,
  RightContentList,
} from "@/components/AlignContent";

import { ListContainer, ListItem } from "@/components/ListContainer";
import { ListTitle, ListSubTitle, ListContent } from "@/objects/ListContent";

import Separator from "@/objects/Separator";
import { ButtonIcon } from "@/objects/Button";
import Link from "@/objects/Link";
import { Download } from "solar-icon-set";

const Monographies = () => (
  <Section isLast="true">
    <Separator number="07" title="Monographies" />
    <RightContent>
      <ListContainer>
        <ListItem link={false}>
          <LeftContentList>
            <ListTitle>MASTER DEGREE</ListTitle>
            <ListSubTitle type="white">UFPR - CURITIBA</ListSubTitle>
            <ListContent>
              Guidance Strategy for Systems of Hypermedia by Collaborative
              Navigation.
            </ListContent>
          </LeftContentList>
          <RightContentList>
            <Link
              href="http://bit.ly/2UCB2v4"
              rel="noopener noreferrer"
              target="_blank"
              buttonCenter={true}
            >
              <ButtonIcon type="purple">
                <Download size={26} />
              </ButtonIcon>
            </Link>
          </RightContentList>
        </ListItem>
        <ListItem link={false}>
          <LeftContentList>
            <ListTitle>GRADUATION</ListTitle>
            <ListSubTitle type="white">UTFPR - CORNÉLIO PROCÓPIO</ListSubTitle>
            <ListContent>
              Guidance Strategy for Systems of Hypermedia by Collaborative
              Navigation.
            </ListContent>
          </LeftContentList>
          <RightContentList>
            <Link
              href="http://bit.ly/2Uxr5yY"
              rel="noopener noreferrer"
              target="_blank"
              buttonCenter={true}
            >
              <ButtonIcon type="purple">
                <Download size={26} />
              </ButtonIcon>
            </Link>
          </RightContentList>
        </ListItem>
      </ListContainer>
    </RightContent>
  </Section>
);
export default Monographies;
