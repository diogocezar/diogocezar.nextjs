import React from 'react'

import { Section } from '@/components/Containers'
import { LeftContent, RightContent } from '@/components/AlignContent'

import Separator from '@/objects/Separator'
import Image from '@/objects/Images'
import { Title } from '@/objects/Titles'
import { QuotedParagraph } from '@/objects/Quotes'
import Link from '@/objects/Link'

const ProudToBeenPart = () => (
  <Section>
    <Separator number="01" title="Portfólio" />
    <LeftContent>
      <Image />
    </LeftContent>
    <RightContent>
      <Title type="internal">Proud to Have Been Part of</Title>
      <QuotedParagraph first="Main Customers" hasQuotedMarks={false}>
        One of my philosophy is that you are what you made. So i’m very proud to have been part of
        projects for some biggest brazilian players, in different contexts.
      </QuotedParagraph>
      <QuotedParagraph first="Musical" hasQuotedMarks={false}>
        I could be involved in many kinds of projects for some big names of Brazilian music
        scenario. My participation at this projects involved many skills to plan and execute.
      </QuotedParagraph>
      <QuotedParagraph first="Agency Products" hasQuotedMarks={false}>
        I could work as developer with some big agencies like{' '}
        <Link type="orange" href="http://www.bolha.com.br" target="_blank">
          Bolha
        </Link>
        ,{' '}
        <Link type="orange" href="http://www.bolha.com.br" target="_blank">
          Africa
        </Link>{' '}
        and{' '}
        <Link type="orange" href="http://www.bolha.com.br" target="_blank">
          Boyband
        </Link>
        . In this cases, I worked sometimes only with front-end and some times as full-stack.
      </QuotedParagraph>
    </RightContent>
  </Section>
)

export default ProudToBeenPart
