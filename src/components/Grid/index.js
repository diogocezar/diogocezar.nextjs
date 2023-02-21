import React from 'react'
import { Col as ColAntd, Row as RowAntd } from 'antd'

import {
  StyledCol4, StyledCol2, StyledCol1, StyledRow, StyledWrapperCol,
} from './styles'

const Col4Styled = StyledCol4(ColAntd)
const Col2Styled = StyledCol2(ColAntd)
const Col1Styled = StyledCol1(ColAntd)
const RowStyled = StyledRow(RowAntd)

const defaultGutter = 16

const defaultCol1 = {
  xs: {
    span: 24,
  },
  md: {
    span: 24,
  },
  lg: {
    span: 24,
  },
}

const defaultCol2 = {
  xs: {
    span: 24,
  },
  md: {
    span: 12,
  },
  lg: {
    span: 12,
  },
}

const defaultCol4 = {
  xs: {
    span: 24,
  },
  sm: {
    span: 12,
  },
  md: {
    span: 12,
  },
  lg: {
    span: 6,
  },
}

const Row = props => (
  <RowStyled gutter={defaultGutter} {...props}>
    {props.children}
  </RowStyled>
)

const Col4 = ({ children }) => <Col4Styled {...defaultCol4}>{children}</Col4Styled>
const Col2 = ({ children }) => <Col2Styled {...defaultCol2}>{children}</Col2Styled>
const Col1 = ({ children }) => <Col1Styled {...defaultCol1}>{children}</Col1Styled>

const WrapperCol = ({ children }) => (
  <StyledWrapperCol {...defaultCol4}>{children}</StyledWrapperCol>
)

export {
  Row, Col4, Col2, Col1, WrapperCol,
}
