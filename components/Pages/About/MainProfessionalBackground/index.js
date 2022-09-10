import React from "react";

import { Section } from "@/components/Containers";
import { RightContent } from "@/components/AlignContent";
import { ListContainer, ListItem } from "@/components/ListContainer";
import { ListTitle, ListSubTitle, ListContent } from "@/objects/ListContent";

import Separator from "@/objects/Separator";
import Button from "@/objects/Button";
import Link from "@/objects/Link";

const MainProfessionalBackground = () => (
  <Section>
    <Separator number="04" title="Main Professional Background" type="orange" />
    <RightContent>
      <ListContainer>
        <ListItem type="orange" link={false}>
          <ListTitle type="orange">BANKME</ListTitle>
          <ListSubTitle type="orange">
            SEP 2022~NOW / HEAD OF TECHNOLOGY
          </ListSubTitle>
          <ListContent>
            Managing teams and helping people to rise on professional carreres.
          </ListContent>
        </ListItem>
        <ListItem type="orange" link={false}>
          <ListTitle type="orange">PROVI</ListTitle>
          <ListSubTitle type="orange">
            MAI 2022~SEP 2022 / ENGINEER MANAGER
          </ListSubTitle>
          <ListContent>Creating solutions for education.</ListContent>
        </ListItem>
        <ListItem type="orange" link={false}>
          <ListTitle type="orange">LUIZALABS</ListTitle>
          <ListSubTitle type="orange">2021~2022 / TECH LEAD</ListSubTitle>
          <ListContent>Supporting many squads at MagaluPay.</ListContent>
        </ListItem>
        <ListItem type="orange" link={false}>
          <ListTitle type="orange">NEON</ListTitle>
          <ListSubTitle type="orange">2019~2021 / TECH LEAD</ListSubTitle>
          <ListContent>Created digital account of MEI Fácil.</ListContent>
        </ListItem>
        <ListItem type="orange" link={false}>
          <ListTitle type="orange">MEI FÁCIL</ListTitle>
          <ListSubTitle type="orange">
            2018~2019 / BACKEND COORDINATOR
          </ListSubTitle>
          <ListContent>
            Managing people and acting also as TechLead.
          </ListContent>
        </ListItem>
        <ListItem type="orange" link={false}>
          <ListTitle type="orange">UTFPR TEACHER</ListTitle>
          <ListSubTitle type="orange">
            2017~2019 / GRADUATION TEACHER
          </ListSubTitle>
          <ListContent>
            Web Programming, Data Structure, Desktop Programming, Integrator
            Project, Algorithms and Introduction to Software Engineering.
          </ListContent>
          <ListSubTitle type="orange">
            2013~2013 / POSTGRADUATE TEACHER
          </ListSubTitle>
          <ListContent>Servelets and JSP.</ListContent>
          <ListSubTitle type="orange">
            2008~2009 / GRADUATION TEACHER
          </ListSubTitle>
          <ListContent>
            Business Programming with C#, Web Programming, Basic Informatics and
            Database Integrator Project.
          </ListContent>
        </ListItem>
      </ListContainer>
      <Link
        href="/assets/docs/diogocezar.pdf"
        target="_blank"
        download="diogocezar.pdf"
      >
        <Button marginBottom="4rem">Download Resume</Button>
      </Link>
    </RightContent>
  </Section>
);
export default MainProfessionalBackground;
