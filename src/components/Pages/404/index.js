import { Section } from '@/components/Containers'
import { LeftContent, RightContent } from '@/components/AlignContent'

import Separator from '@/objects/Separator'
import Image from '@/objects/Images'
import { Title, SubTitle } from '@/objects/Titles'
import Button from '@/objects/Button'

const Message = () => (
  <Section>
    <Separator number="404" title="Page not Found!" />
    <LeftContent>
      <Image alt="Diogo Cezar" />
    </LeftContent>
    <RightContent>
      <Title type="main">Oops, page not found!</Title>
      <SubTitle color="white">Please, go back and try again.</SubTitle>
    </RightContent>
  </Section>
)

export default Message
