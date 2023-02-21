import React from 'react'

import { Section } from '@/components/Containers'
import { RightContent, LeftContentList, RightContentList } from '@/components/AlignContent'

import { ListContainer, ListItem } from '@/components/ListContainer'
import { ListTitle, ListSubTitle, ListContent } from '@/objects/ListContent'

import Separator from '@/objects/Separator'
import Button from '@/objects/Button'
import Link from '@/objects/Link'

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
              Guidance Strategy for Systems of Hypermedia by Collaborative Navigation.
            </ListContent>
          </LeftContentList>
          <RightContentList>
            <Link href="http://bit.ly/2UEVvz6" target="_blank" buttonCenter={true}>
              <Button type="orange">Download</Button>
            </Link>
          </RightContentList>
        </ListItem>
      </ListContainer>
    </RightContent>
  </Section>
)
export default MainPappers
