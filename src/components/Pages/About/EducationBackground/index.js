import React from "react";

import { Section } from "@/components/Containers";
import { RightContent } from "@/components/AlignContent";
import { ListContainer, ListItem } from "@/components/ListContainer";

import Separator from "@/objects/Separator";
import { ListTitle, ListSubTitle, ListContent } from "@/objects/ListContent";
import Paragraph from "@/objects/Paragraph";

const EducationBackground = () => (
  <Section>
    <Separator number="02" title="Education" />
    <RightContent>
      <ListContainer>
        <ListItem link={false}>
          <ListTitle>PHD COMPUTER ENGINEERING - CREDITS ONLY</ListTitle>
          <ListSubTitle type="white">2020~2021 - UFPR</ListSubTitle>
          <ListContent>
            I have completed the credits in the subjects of Machine Learning,
            Seminars, and Topics in HCI.
          </ListContent>
        </ListItem>
        <ListItem link={false}>
          <ListTitle>MASTER DEGREE COMPUTER SCIENCE</ListTitle>
          <ListSubTitle type="white">2010~2012 - UFPR</ListSubTitle>
          <ListContent>
            A model for execution of scientific workflows using automatic
            planning techniques. <br />
            LIAMF - Laboratório de Inteligência Artificial e Métodos Formais.
          </ListContent>
        </ListItem>
        <ListItem link={false}>
          <ListTitle>TECHNOLOGY INFORMATION SYSTEM DEVELOPMENT</ListTitle>
          <ListSubTitle type="white">2004~2007 - UTFPR</ListSubTitle>
          <ListContent>
            Adaptative hypermedia approach based on optimisation by any colony.
          </ListContent>
        </ListItem>
      </ListContainer>
    </RightContent>
  </Section>
);
export default EducationBackground;
