import React from 'react'

import { Section } from '@/components/Containers'
import { FullContent } from '@/components/AlignContent'
import { Row, Col4, WrapperCol } from '@/components/Grid'

import Separator from '@/objects/Separator'
import { TitleItemColumn } from '@/objects/Titles'
import { ImageItemColumn } from '@/objects/Images'
import Paragraph from '@/objects/Paragraph'

const Agency = () => (
  <Section>
    <Separator number="04" title="Agency" />
    <FullContent>
      <Row>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/agency/esss.svg" />
            <TitleItemColumn color="orange">ESSS</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%" align="center">
              Created all Front-End and have been part of Back-End of entire website.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/agency/products-of-tomorrow.jpg" />
            <TitleItemColumn color="orange">Products of Tomorrow</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%" align="center">
              Promotional action of Africa Agency where i could manage website with some advanced
              features.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/agency/hardera.svg" />
            <TitleItemColumn color="orange">Hardera</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%" align="center">
              Developed website for this wood company.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/agency/kokar.svg" />
            <TitleItemColumn color="orange">Kokar</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%" align="center">
              Developed solution for this paint company.
            </Paragraph>
          </WrapperCol>
        </Col4>
      </Row>
      <Row>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/agency/angie.svg" />
            <TitleItemColumn color="orange">Angie</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%" align="center">
              Developed website for childs dental products.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/agency/boyband.svg" />
            <TitleItemColumn color="orange">Boyband</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%" align="center">
              Developed many website for this Agency.
            </Paragraph>
          </WrapperCol>
        </Col4>
      </Row>
    </FullContent>
  </Section>
)

export default Agency
