import styled from 'styled-components'
import { devices } from '@/styles/devices'

const StyledParagraph = styled.p`
  position: relative;
  float: left;
  width: 100%;
  color: ${({ color }) => (color ? `var(--color-${color})` : 'var(--color-white)')}!important;
  font-family: ${({ font }) => (font === 'sans-serif' ? 'AkzidenzGroteskBE' : 'AGaramondPro')}!important;
  font-style: normal;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')}!important;
  font-size: ${({ size }) => {
    switch (size) {
      case 'small':
        return '1rem'
      case 'medium':
        return '1.2rem'
      default:
        return '1.6rem'
    }
  }}!important;
  line-height: ${({ size }) => {
    switch (size) {
      case 'small':
        return '2rem'
      case 'medium':
        return '2rem'
      default:
        return '2.7rem'
    }
  }}!important;
  margin-bottom: ${({ bottom }) => bottom || 'var(--size-s4)'} !important;
  padding: ${({ padding }) => padding || '0'} !important;
  ${({ padding }) => {
    if (!padding) {
      return 'padding-right: var(--size-s6)!important'
    }
  }}
  a {
    color: var(--color-orange) !important;
  }
  min-height: ${({ minheight }) => minheight || 'auto'} !important;
  text-align: ${({ align }) => align || 'left'} !important;
  @media ${devices.desktop} {
    padding-right: 0 !important;
    padding-left: 0 !important;
    font-size: ${({ size }) => {
    switch (size) {
      case 'small':
        return '0.8rem'
      case 'medium':
        return '1rem'
      default:
        return '1.4rem'
    }
  }}!important;
    line-height: ${({ size }) => {
    switch (size) {
      case 'small':
        return '1.8rem'
      case 'medium':
        return '1.6rem'
      default:
        return '2.4rem'
    }
  }}!important;
  }
  @media ${devices.tablet} {
    font-size: 1.2rem !important;
    line-height: 2rem !important;
    &:last-child {
      margin-bottom: 0 !important;
    }
  }
`

export default StyledParagraph
