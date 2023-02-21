import React from 'react'
import StyledLink from './styles'

const isExternal = target => (target !== '_blank' ? 'noopener noreferrer' : '')

const Link = props => (
  <StyledLink {...props} rel={isExternal(props.target)}>
    {props.children}
  </StyledLink>
)

export default Link
