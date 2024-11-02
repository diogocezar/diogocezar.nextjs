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
import Button from "@/objects/Button";
import Link from "@/objects/Link";
import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";

const MainLectures = () => (
  <Section>
    <Separator number="04" title="Main Lectures" />
    <RightContent>
      <ListContainer>
        <ListItem link={false}>
          <LeftContentList>
            <ListTitle>GDG LONDRINA MEETUP #8 - 2019</ListTitle>
            <ListSubTitle type="white">LONDRISOFT - LONDRINA - PR</ListSubTitle>
            <ListContent>API Node in 30 minutes - 30~45 min.</ListContent>
          </LeftContentList>
          <RightContentList>
            <Link
              href="http://bit.ly/32l12N0``"
              rel="noopener noreferrer"
              target="_blank"
              buttonCenter={true}
            >
              <Button type="purple">
                {" "}
                <DownloadSimple size={23} />
                <div style={{ marginTop: "4px" }}>Download</div>
              </Button>
            </Link>
          </RightContentList>
        </ListItem>
        <ListItem link={false}>
          <LeftContentList>
            <ListTitle>ROCKETSEAT EXPERIENCE - 2019</ListTitle>
            <ListSubTitle type="white">
              SÃO PAULO EXPO - SÃO PAULO - SP
            </ListSubTitle>
            <ListContent>Minicourse NodeJS with Tests - 60 min.</ListContent>
          </LeftContentList>
          <RightContentList>
            <Link
              href="http://bit.ly/2q9zMlU"
              rel="noopener noreferrer"
              target="_blank"
              buttonCenter={true}
            >
              <Button type="purple">
                {" "}
                <DownloadSimple size={23} />
                <div style={{ marginTop: "4px" }}>Download</div>
              </Button>
            </Link>
          </RightContentList>
        </ListItem>
        <ListItem link={false}>
          <LeftContentList>
            <ListTitle>GDG LONDRINA MEETUP #7 - 2019</ListTitle>
            <ListSubTitle type="white">UNICESUMAR - LONDRINA - PR</ListSubTitle>
            <ListContent>
              Talk About The Future of Education - 30~45 min.
            </ListContent>
          </LeftContentList>
          <RightContentList>
            <Link
              href="http://bit.ly/2OoqTOZ"
              rel="noopener noreferrer"
              target="_blank"
              buttonCenter={true}
            >
              <Button type="purple">
                {" "}
                <DownloadSimple size={23} />
                <div style={{ marginTop: "4px" }}>Download</div>
              </Button>
            </Link>
          </RightContentList>
        </ListItem>
        <ListItem link={false}>
          <LeftContentList>
            <ListTitle>DACOMP - 2019</ListTitle>
            <ListSubTitle type="white">
              UTFPR - CORNÉLIO PROCÓPIO - PR
            </ListSubTitle>
            <ListContent>Minicourse of ReactJS - 4 hours.</ListContent>
          </LeftContentList>
          <RightContentList>
            <Link
              href="http://bit.ly/2Ixgdcc"
              rel="noopener noreferrer"
              target="_blank"
              buttonCenter={true}
            >
              <Button type="purple">
                {" "}
                <DownloadSimple size={23} />
                <div style={{ marginTop: "4px" }}>Download</div>
              </Button>
            </Link>
          </RightContentList>
        </ListItem>
        <ListItem link={false}>
          <LeftContentList>
            <ListTitle>SECOMP - 2018</ListTitle>
            <ListSubTitle type="white">
              UTFPR - CORNÉLIO PROCÓPIO - PR
            </ListSubTitle>
            <ListContent>Minicourse of ReactJS - 4 hours.</ListContent>
          </LeftContentList>
          <RightContentList>
            <Link
              href="http://bit.ly/2CTQQ52"
              rel="noopener noreferrer"
              target="_blank"
              buttonCenter={true}
            >
              <Button type="purple">
                {" "}
                <DownloadSimple size={23} />
                <div style={{ marginTop: "4px" }}>Download</div>
              </Button>
            </Link>
          </RightContentList>
        </ListItem>
        <ListItem link={false}>
          <LeftContentList>
            <ListTitle>UTFWARE - 2017</ListTitle>
            <ListSubTitle type="white">
              UTFPR - CORNÉLIO PROCÓPIO - PR
            </ListSubTitle>
            <ListContent>Git and GitHub - 4 hours.</ListContent>
          </LeftContentList>
          <RightContentList>
            <Link
              href="http://bit.ly/2BL72VD"
              rel="noopener noreferrer"
              target="_blank"
              buttonCenter={true}
            >
              <Button type="purple">
                {" "}
                <DownloadSimple size={23} />
                <div style={{ marginTop: "4px" }}>Download</div>
              </Button>
            </Link>
          </RightContentList>
        </ListItem>
        <ListItem link={false}>
          <LeftContentList>
            <ListTitle>UTFWARE - 2017</ListTitle>
            <ListSubTitle type="white">
              UTFPR - CORNÉLIO PROCÓPIO - PR
            </ListSubTitle>
            <ListContent>Sass - 4 hours.</ListContent>
          </LeftContentList>
          <RightContentList>
            <Link
              href="http://bit.ly/2LrSYQm"
              rel="noopener noreferrer"
              target="_blank"
              buttonCenter={true}
            >
              <Button type="purple">
                {" "}
                <DownloadSimple size={23} />
                <div style={{ marginTop: "4px" }}>Download</div>
              </Button>
            </Link>
          </RightContentList>
        </ListItem>
        <ListItem link={false}>
          <LeftContentList>
            <ListTitle>UTFWARE - 2017</ListTitle>
            <ListSubTitle type="white">
              UTFPR - CORNÉLIO PROCÓPIO - PR
            </ListSubTitle>
            <ListContent>Why JavaScript - 40 min.</ListContent>
          </LeftContentList>
          <RightContentList>
            <Link
              href="http://bit.ly/2BKKPab"
              rel="noopener noreferrer"
              target="_blank"
              buttonCenter={true}
            >
              <Button type="purple">
                {" "}
                <DownloadSimple size={23} />
                <div style={{ marginTop: "4px" }}>Download</div>
              </Button>
            </Link>
          </RightContentList>
        </ListItem>
        <ListItem link={false}>
          <LeftContentList>
            <ListTitle>CHARNEIRA - 2011</ListTitle>
            <ListSubTitle type="white">PUCPR - CURITIBA - PR</ListSubTitle>
            <ListContent>
              Multidisciplinary integration between design and web programming.
              10 hours.
            </ListContent>
          </LeftContentList>
        </ListItem>
      </ListContainer>
    </RightContent>
  </Section>
);
export default MainLectures;
