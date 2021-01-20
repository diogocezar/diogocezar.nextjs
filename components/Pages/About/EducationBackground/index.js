import React from 'react'

import { Section } from '@/components/Containers'
import { RightContent } from '@/components/AlignContent'
import { ListContainer, ListItem } from '@/components/ListContainer'

import Separator from '@/objects/Separator'
import { ListTitle, ListSubTitle, ListContent } from '@/objects/ListContent'

const EducationBackground = () => (
  <Section>
    <Separator number="03" title="Education Background" type="orange" />
    <RightContent>
      <ListContainer>
        <ListItem type="orange" link={false}>
          <ListTitle type="orange">MASTER DEGREE COMPUTER SCIENCE</ListTitle>
          <ListSubTitle type="orange">2010~2012 - UFPR</ListSubTitle>
          <ListContent>
            A model for execution of scientific workflows using automatic planning techniques.{' '}
            <br />
            LIAMF - Laboratório de Inteligência Artificial e Métodos Formais.
          </ListContent>
        </ListItem>
        <ListItem type="orange" link={false}>
          <ListTitle type="orange">TECHNOLOGY INFORMATION SYSTEM DEVELOPMENT</ListTitle>
          <ListSubTitle type="orange">2004~2007 - UTFPR</ListSubTitle>
          <ListContent>
            Adaptative hypermedia approach based on optimisation by any colony.
          </ListContent>
        </ListItem>
      </ListContainer>
    </RightContent>
  </Section>
)
export default EducationBackground
