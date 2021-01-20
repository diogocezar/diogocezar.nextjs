import React from 'react'

import { Section } from '@/components/Containers'
import { RightContent } from '@/components/AlignContent'
import { ListContainer, ListItem } from '@/components/ListContainer'

import Separator from '@/objects/Separator'
import { ListTitle, ListContent } from '@/objects/ListContent'

const MainEventsParticipations = () => (
  <Section>
    <Separator number="05" title="Main Events Participations" />
    <RightContent>
      <ListContainer>
        <ListItem color="purple" link={false}>
          <ListTitle>ROCKETSEAT EXPERIENCE - 2019</ListTitle>
          <ListContent>Hackaton Mentor / Neon Partner.</ListContent>
          <ListContent>SÃO PAULO - SP</ListContent>
        </ListItem>
        <ListItem color="purple" link={false}>
          <ListTitle>BRASILJS - 2017</ListTitle>
          <ListContent>PORTO ALEGRE - RS</ListContent>
        </ListItem>
        <ListItem color="purple" link={false}>
          <ListTitle>HACKATON GLOBO BBB - 2016</ListTitle>
          <ListContent>RIO DE JANEIRO - RJ</ListContent>
        </ListItem>
      </ListContainer>
    </RightContent>
  </Section>
)
export default MainEventsParticipations
