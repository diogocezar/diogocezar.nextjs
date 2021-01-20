import React from 'react'
import { StyledTitle, StyledSubTitle, StyledTitleItemColumn } from './styles'

const Title = props => <StyledTitle {...props}>{props.children}</StyledTitle>
const SubTitle = props => <StyledSubTitle {...props}>{props.children}</StyledSubTitle>
const TitleItemColumn = props => (
  <StyledTitleItemColumn {...props}>{props.children}</StyledTitleItemColumn>
)

export { Title, SubTitle, TitleItemColumn }
