import React from 'react'

import { Section } from '@/components/Containers'
import { RightContent } from '@/components/AlignContent'

import Separator from '@/objects/Separator'
import { QuotedMain } from '@/objects/Quotes'

const Conclusion = () => (
  <Section>
    <Separator number="03" title="Conclusion" />
    <RightContent>
      <QuotedMain author="Steve Jobs">
        Your work is going to fill a large part of your life, and the only way to be truly satisfied
        is to do what you believe is great work. And the only way to do great work is to love what
        you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the
        heart, you’ll know when you find it.
      </QuotedMain>
    </RightContent>
  </Section>
)

export default Conclusion
