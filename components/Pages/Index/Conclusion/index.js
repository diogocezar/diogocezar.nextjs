import React from 'react'

import { Section } from '@/components/Containers'
import { RightContent } from '@/components/AlignContent'

import Separator from '@/objects/Separator'
import { QuotedMain } from '@/objects/Quotes'

const Conclusion = ({citation, citationAuthor}) => (
  <Section>
    <Separator number="03" title="Conclusion" />
    <RightContent>
      <QuotedMain author={citationAuthor}>
        {citation}
      </QuotedMain>
    </RightContent>
  </Section>
)

export default Conclusion
