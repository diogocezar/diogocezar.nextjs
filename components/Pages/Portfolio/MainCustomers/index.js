import React from 'react'

import { Section } from '@/components/Containers'
import { FullContent } from '@/components/AlignContent'
import { Row, Col4, WrapperCol } from '@/components/Grid'

import Separator from '@/objects/Separator'
import { TitleItemColumn } from '@/objects/Titles'
import { ImageItemColumn } from '@/objects/Images'
import Paragraph from '@/objects/Paragraph'

const MainCustomers = () => (
  <Section>
    <Separator number="02" title="Main Customers" />
    <FullContent>
      <Row>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/twitter.svg" />
            <TitleItemColumn color="orange">Twitter</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%" align="center">
              Front-end development of a website where people could choose if Eto’o soccer player
              would go to play one game on Botafogo or Comercial club.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/brahma.svg" />
            <TitleItemColumn color="orange">Brahma</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%" align="center">
              Front-end development of Brahma Valley 2015 edition. Brahma Valley is a music festival
              with 3 simultaneous stage, with the biggest Sertanejo musicians of Brazil.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/visa.svg" />
            <TitleItemColumn color="orange">Visa</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%" align="center">
              Developed a web game system, where pair of peoples could disput witch one was ables to
              use Visa credit card to shop some product in less time.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/sonho-de-valsa.svg" />
            <TitleItemColumn color="orange">Sonho de Valsa</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%" align="center">
              Created a Front-End of a portal of romantic reciples. The intent was that the couple
              could cook together.
            </Paragraph>
          </WrapperCol>
        </Col4>
      </Row>
      <Row>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/volkswagen.svg" />
            <TitleItemColumn color="orange">Volkswagen</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%" align="center">
              Created Front-End layout for Wolkswagen accessories. That includes checkout system,
              internal pages and reponsive layout.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/skol.svg" />
            <TitleItemColumn color="orange">Skol</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%" align="center">
              Developed a Front-End hotsite for an app that could map urban places where you could
              workout.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/gillette.svg" />
            <TitleItemColumn color="orange">Gillette</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%" align="center">
              For Gillette i developed a simple introduction website for allow WiFi connections.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/lacta.svg" />
            <TitleItemColumn color="orange">Lacta</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%" align="center">
              Developed an animated hotsite for an promotional action of Lacta company.
            </Paragraph>
          </WrapperCol>
        </Col4>
      </Row>
      <Row>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/subway.svg" />
            <TitleItemColumn color="orange">Subway</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%" align="center">
              Developed an entire front-end system where the people could creat their own advertise
              vídeos of Subway.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/recco.svg" />
            <TitleItemColumn color="orange">Recco</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%" align="center">
              For Recco, we create two products: Anna Hickiman HotSite and a Blog for feminine
              fashion.
            </Paragraph>
          </WrapperCol>
        </Col4>
      </Row>
    </FullContent>
  </Section>
)

export default MainCustomers
