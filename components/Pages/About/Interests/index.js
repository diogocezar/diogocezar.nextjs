import React from 'react'

import { Section } from '@/components/Containers'
import { RightContent } from '@/components/AlignContent'
import { ListContainer, ListItem } from '@/components/ListContainer'

import Separator from '@/objects/Separator'
import { ListTitle, ListContent } from '@/objects/ListContent'

const Interests = () => (
  <Section>
    <Separator number="02" title="Interests" type="orange" />
    <RightContent>
      <ListContainer>
        <ListItem type="orange" link={false}>
          <ListTitle type="orange">WEB DEVELOPMENT</ListTitle>
          <ListContent>Front and Back-End, specially with NodeJS and ReactJS.</ListContent>
        </ListItem>
        <ListItem type="orange" link={false}>
          <ListTitle type="orange">EVOLUTIONARY COMPUTING</ListTitle>
          <ListContent>
            {' '}
            It amounts to building, applying and studying algorithms based on principles of natural
            selection.
          </ListContent>
        </ListItem>
        <ListItem type="orange" link={false}>
          <ListTitle type="orange">ARTIFICIAL INTELIGENCE</ListTitle>
          <ListContent>Tradicional AI techniques.</ListContent>
        </ListItem>
        <ListItem type="orange" link={false}>
          <ListTitle type="orange">MOBILE</ListTitle>
          <ListContent>Pwas, responsive and hybrid mobile applications.</ListContent>
        </ListItem>
      </ListContainer>
    </RightContent>
  </Section>
)
export default Interests
