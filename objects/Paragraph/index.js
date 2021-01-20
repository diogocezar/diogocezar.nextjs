import React from 'react'
import StyledParagraph from './styles'

const Paragraph = props => <StyledParagraph {...props}>{props.children}</StyledParagraph>

export default Paragraph
