import { Component } from 'react'
import { Section } from '@/components/Containers'
import { LeftContent, RightContent } from '@/components/AlignContent'

import Container from './styles'

import Separator from '@/objects/Separator'
import Image from '@/objects/Images'
import { Title } from '@/objects/Titles'
import Paragraph from '@/objects/Paragraph'
import Button from '@/objects/Button'

class Details extends Component {
  renderPost = (post) => {
    return (
      <>
        <Title type="internal" color="orange" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></Title>
        <Paragraph>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}/>
        </Paragraph>
        <Button >Voltar</Button>
      </>
    )
  }

  render() {
    return (
      <Section>
        <Container>
          <Separator number="01" title="Post Details"/>
          <LeftContent>
            <Image alt="Diogo Cezar"/>
          </LeftContent>
          <RightContent>
            {this.renderPost(this.props.post)}
          </RightContent>
        </Container>
      </Section>
    )
  }
}


export default Details
