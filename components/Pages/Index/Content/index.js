import React from 'react'
import { Link } from 'next/link'

import { Section } from '@/components/Containers'
import { RightContent } from '@/components/AlignContent'
import { ListContainer, ListItem } from '@/components/ListContainer'

import Separator from '@/objects/Separator'
import { ListContentMain, ListMenu } from '@/objects/ListContent'

const Content = () => (
  <Section>
    <Separator number="02" title="Content" />
    <RightContent>
      <ListContainer>
        <ListItem hoverColor="purple-dark">
          <a href="/about">
            <ListMenu>ABOUT</ListMenu>
          </a>
          <ListContentMain menuMain={true}>
            Detailed page about me, interests, education, professional, hobbies, skills and awards.
          </ListContentMain>
        </ListItem>
        <ListItem hoverColor="purple-dark">
          <a href="/blog/1">
            <ListMenu>BLOG</ListMenu>
          </a>
          <ListContentMain menuMain={true}>
            Just old thinks (portuguese only).
          </ListContentMain>
        </ListItem>
        <ListItem hoverColor="purple-dark">
          <a href="/portfolio">
            <ListMenu>PORTFÓLIO</ListMenu>
            <ListContentMain menuMain={true}>List of my main jobs.</ListContentMain>
          </a>
        </ListItem>
        <ListItem hoverColor="purple-dark">
          <a href="/educational">
            <ListMenu>EDUCATIONAL</ListMenu>
            <ListContentMain menuMain={true}>Where i spread the word of development.</ListContentMain>
          </a>
        </ListItem>
        <ListItem hoverColor="purple-dark">
          <a href="/contact">
            <ListMenu>CONTACT</ListMenu>
            <ListContentMain menuMain={true}>
              Let’s keep in touch thought social media networks.
            </ListContentMain>
          </a>
        </ListItem>
      </ListContainer>
    </RightContent>
  </Section>
)

export default Content
