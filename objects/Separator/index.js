import React from 'react'
import { StyledSeparator, StyledLineSeparator } from './styles'

const Separator = ({ number, title, type }) => (
  <StyledSeparator type={type}>
    <h2>
      <span>{number}</span>
      {title}
    </h2>
  </StyledSeparator>
)

const LineSeparator = () => (
  <StyledLineSeparator></StyledLineSeparator>
)

export default Separator
export { LineSeparator }
