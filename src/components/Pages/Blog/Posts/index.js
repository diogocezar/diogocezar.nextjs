import { Component, Fragment } from 'react'
import moment from 'moment'
import 'moment/locale/pt-br'
import { Section } from '@/components/Containers'
import { LeftContent, RightContent } from '@/components/AlignContent'

import Separator, { LineSeparator } from '@/objects/Separator'
import Image from '@/objects/Images'
import { Title, SubTitle } from '@/objects/Titles'
import Paragraph from '@/objects/Paragraph'
import Button from '@/objects/Button'

import Link from "next/link"

class Posts extends Component {

  renderPosts = (posts) => posts.map((post) => {
    if (post.title.rendered && post.content.rendered) {
      return (
        <Fragment key={post.id}>
          <Title type="internal" color="orange" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></Title>
          <SubTitle color="white" dangerouslySetInnerHTML={{ __html: moment(post.date).calendar() }}></SubTitle>
          <Paragraph dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></Paragraph>
          <Link href={`../${post.slug}`}>
            <Button color="purple">Veja Mais</Button>
          </Link>
          <LineSeparator></LineSeparator>
        </Fragment>
      )
    }
    return null
  })

  render() {
    return (
      <Section>
        <Separator number="01" title="Blog" />
        <LeftContent>
          <Image alt="Diogo Cezar"/>
        </LeftContent>
        <RightContent>
          {this.renderPosts(this.props.posts)}
        </RightContent>
      </Section>
    )
  }
}

export default Posts
