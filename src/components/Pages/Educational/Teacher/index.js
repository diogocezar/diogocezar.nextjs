import React from 'react'

import { Section } from '@/components/Containers'
import { RightContent } from '@/components/AlignContent'

import Separator from '@/objects/Separator'
import Paragraph from '@/objects/Paragraph'
import Button from '@/objects/Button'
import Link from "@/objects/Link";

const GitHub = () => (
  <Section>
    <Separator number="03" title="Teacher" type="orange" />
    <RightContent>
      <Paragraph>
        As teacher I collected many materials that could be useful for students and enthusiasts, so
        I organised all of them in a GitHub repository, you can checkout it accessing:
      </Paragraph>
      <Link
          href="https://github.com/diogocezar/dctb-utfpr"
          target="_blank"
        >
          <Button bottom="4rem">Check Contents</Button>
      </Link>
    </RightContent>
  </Section>
)
export default GitHub
