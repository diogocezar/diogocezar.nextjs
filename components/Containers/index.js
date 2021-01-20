import React from 'react'
import { StyledPage, StyledSection, StyledWrapper } from './styles'

const Page = props => <StyledPage {...props}>{props.children}</StyledPage>
const Section = ({ children, ...props }) => <StyledSection {...props}>{children}</StyledSection>
const Wrapper = ({ children }) => <StyledWrapper>{children}</StyledWrapper>

export { Page, Section, Wrapper }
