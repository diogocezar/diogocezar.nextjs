import React from 'react'
import InlineSVG from 'svg-inline-react'
import Footer, { ColumnFooter, TitleFooter, ContentFooter } from '@/components/Footer'
import { ListContainerFooter, ListItemFooter } from '@/components/ListContainer'
import Link from '@/objects/Link'
import {
  iconFooterGithub,
  iconFooterTwitter,
  iconFooterInstagram,
  iconFooterFacebook,
  iconFooterLinkedIn,
} from '@/content/data'

const FooterMain = ({ isMain }) => (
  <Footer isMain={isMain}>
    <ColumnFooter>
      <TitleFooter align="left">SOURCE CODE</TitleFooter>
      <ContentFooter align="left">
        This website is open source and you can download{' '}
        <Link href="http://www.github.com/diogocezar/diogocezar.github.io/" target="_blank">
          right here.
        </Link>
      </ContentFooter>
    </ColumnFooter>
    <ColumnFooter>
      <TitleFooter>CONTACT</TitleFooter>
      <ContentFooter>
        You can contact me through{' '}
        <Link href="mailto:diogo@diogocezar.dev">diogo@diogocezar.dev</Link>
        <br />
        +55 (43) 933 000 663
      </ContentFooter>
    </ColumnFooter>
    <ColumnFooter>
      <TitleFooter align="right">SOCIAL NETWORKS</TitleFooter>
      <ContentFooter align="right">
        <ListContainerFooter>
          <ListItemFooter>
            <Link href="https://github.com/diogocezar/" target="_blank">
              <InlineSVG src={iconFooterGithub} />
            </Link>
          </ListItemFooter>
          <ListItemFooter>
            <Link href="https://twitter.com/diogocezar" target="_blank">
              <InlineSVG src={iconFooterTwitter} />
            </Link>
          </ListItemFooter>
          <ListItemFooter>
            <Link href="https://www.instagram.com/diogoctb/" target="_blank">
              <InlineSVG src={iconFooterInstagram} />
            </Link>
          </ListItemFooter>
          <ListItemFooter>
            <Link href="https://www.facebook.com/diogocezar" target="_blank">
              <InlineSVG src={iconFooterFacebook} />
            </Link>
          </ListItemFooter>
          <ListItemFooter>
            <Link href="https://www.linkedin.com/in/diogocezar/" target="_blank">
              <InlineSVG src={iconFooterLinkedIn} />
            </Link>
          </ListItemFooter>
        </ListContainerFooter>
      </ContentFooter>
    </ColumnFooter>
  </Footer>
)

export default FooterMain
