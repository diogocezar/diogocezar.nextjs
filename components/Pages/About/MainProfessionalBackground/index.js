import React from 'react'

import { Section } from '@/components/Containers'
import { RightContent } from '@/components/AlignContent'
import { ListContainer, ListItem } from '@/components/ListContainer'
import { ListTitle, ListSubTitle, ListContent } from '@/objects/ListContent'

import Separator from '@/objects/Separator'
import Button from '@/objects/Button'
import Link from '@/objects/Link'

const MainProfessionalBackground = () => (
  <Section>
    <Separator number="04" title="Main Professional Background" type="orange" />
    <RightContent>
      <ListContainer>
        <ListItem type="orange" link={false}>
          <ListTitle type="orange">NEON</ListTitle>
          <ListSubTitle type="orange">2018~NOW / TECH LEAD</ListSubTitle>
          <ListContent>SQL Server, MongoDB, NodeJS, RabbitMQ, DevOps, Solution Architecture.</ListContent>
        </ListItem>
        <ListItem type="orange" link={false}>
          <ListTitle type="orange">UTFPR TEACHER</ListTitle>
          <ListSubTitle type="orange">2017~2019 / GRADUATION TEACHER</ListSubTitle>
          <ListContent>
            Web Programming, Data Structure, Desktop Programming, Integrator Project, Algorithms and
            Introduction to Software Engineering.
          </ListContent>
          <ListSubTitle type="orange">2013~2013 / POSTGRADUATE TEACHER</ListSubTitle>
          <ListContent>Servelets and JSP.</ListContent>
          <ListSubTitle type="orange">2008~2009 / GRADUATION TEACHER</ListSubTitle>
          <ListContent>
            Business Programming with C#, Web Programming, Basic Informatics and Database Integrator
            Project.
          </ListContent>
        </ListItem>
      </ListContainer>
      <Link href="/assets/docs/diogocezar.pdf" target="_blank" download="diogocezar.pdf">
        <Button marginBottom="4rem">Download Resume</Button>
      </Link>
    </RightContent>
  </Section>
)
export default MainProfessionalBackground
