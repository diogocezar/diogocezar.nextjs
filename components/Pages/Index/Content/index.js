import React from 'react'
import { Link } from 'next/link'

import { Section } from '@/components/Containers'
import { RightContent } from '@/components/AlignContent'
import { Title } from '@/objects/Titles'
import Separator from '@/objects/Separator'

const Content = () => (
  <Section>
    <Separator number="02" title="Content" />
    <RightContent>
    <Title type="main">Comming soon</Title>
    </RightContent>
  </Section>
)

export default Content
