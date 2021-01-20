import React from 'react'

import { Section } from '@/components/Containers'
import { RightContent } from '@/components/AlignContent'

import Separator from '@/objects/Separator'
import { SubTitle } from '@/objects/Titles'
import TagSkills from '@/objects/TagSkills'

import { skills } from '@/content/data'

const Skills = () => (
  <Section>
    <Separator number="06" title="Skills" />
    <RightContent>
      <SubTitle type="internal">GUESS WHICH ONE IS A POKEMON </SubTitle>
      <TagSkills skills={skills.sort()} />
    </RightContent>
  </Section>
)
export default Skills
