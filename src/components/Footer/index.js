import React from 'react'
import {
  StyledFooter, StyledColumnFooter, StyledTitleFooter, StyledContentFooter,
} from './styles'

const Footer = props => <StyledFooter {...props}>{props.children}</StyledFooter>
const ColumnFooter = ({ children }) => <StyledColumnFooter>{children}</StyledColumnFooter>
const TitleFooter = ({ children, ...props }) => (
  <StyledTitleFooter {...props}>{children}</StyledTitleFooter>
)
const ContentFooter = ({ children, ...props }) => (
  <StyledContentFooter {...props}>{children}</StyledContentFooter>
)

export default Footer
export { ColumnFooter, TitleFooter, ContentFooter }
