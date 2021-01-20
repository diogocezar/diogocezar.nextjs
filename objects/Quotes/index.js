import React from 'react'
import { StyledQuotedMain, StyledQuotedParagraph } from './styles'

const QuotedMain = ({ author, children }) => (
  <StyledQuotedMain>
    <p>“{children}”</p>
    <span>{author}</span>
  </StyledQuotedMain>
)

const QuotedParagraph = ({ first, children, hasQuotedMarks = true }) => (
  <StyledQuotedParagraph>
    {(hasQuotedMarks && (
      <p>
        <span>{first} — </span>“{children}”
      </p>
    )) || (
      <p>
        <span>{first} — </span>
        {children}
      </p>
    )}
  </StyledQuotedParagraph>
)

export { QuotedMain, QuotedParagraph }
