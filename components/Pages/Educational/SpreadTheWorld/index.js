import React from 'react'

import { Section } from '@/components/Containers'
import { LeftContent, RightContent } from '@/components/AlignContent'

import Separator from '@/objects/Separator'
import Image from '@/objects/Images'
import { Title } from '@/objects/Titles'
import { QuotedParagraph } from '@/objects/Quotes'
import Paragraph from '@/objects/Paragraph'

const SpreadTheWorld = () => (
  <Section>
    <Separator number="01" title="Educational" type="orange" />
    <LeftContent>
      <Image />
    </LeftContent>
    <RightContent>
      <Title type="internal" color="purple-dark">
        Where i Spread the Word of Development
      </Title>
      <QuotedParagraph first="Journey of Share" hasQuotedMarks={false}>
        The better way to learn something is when you try to explain it to someone. In my journey I
        tried to do it in many ways. As teacher, as talker or with some video courses. Doesn’t
        matter, since you try to help someone ;)
      </QuotedParagraph>
      <Paragraph font="sans-serif" bold={true}>
        So, here is a perfect place to index, and remember all my tries of spread the word of
        development. Also, you can see a little bit with downloadable content.
      </Paragraph>
    </RightContent>
  </Section>
)
export default SpreadTheWorld
