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
import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";

const MainPappers = () => (
  <Section>
    <Separator number="06" title="Main Pappers" />
    <RightContent>
      <ListContainer>
        <ListItem link={false}>
          <LeftContentList>
            <ListTitle>WEBMEDIA - 2007</ListTitle>
            <ListSubTitle type="white">GRAMADO - RS</ListSubTitle>
            <ListContent>
              Guidance Strategy for Systems of Hypermedia by Collaborative
              Navigation.
            </ListContent>
          </LeftContentList>
          <RightContentList>
            <Link
              href="http://bit.ly/2UEVvz6"
              rel="noopener noreferrer"
              target="_blank"
              buttonCenter={true}
            >
              <ButtonIcon type="purple">
                <DownloadSimple size={23} />
              </ButtonIcon>
            </Link>
          </RightContentList>
        </ListItem>
      </ListContainer>
    </RightContent>
  </Section>
);
export default MainPappers;
