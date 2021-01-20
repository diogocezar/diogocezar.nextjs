import styled from 'styled-components'
import { devices } from '@/styles/devices'
import { Transition } from '@/styles/animations'

const StyledListContainer = styled.ul`
  position: relative;
  float: left;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  a {
    text-decoration: none;
    color: inherit;
  }
`

const StyledListContainerFooter = styled.ul`
  position: relative;
  float: right;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: space-between;
  max-width: 360px;
  @media ${devices.laptopLarge} {
    max-width: none;
    align-content: center;
    align-items: center;
    justify-content: space-around;
  }
  @media ${devices.laptop} {
    float: none;
    margin: 0 auto;
    margin-top: 60px;
    max-width: 460px;
  }
`

const StyledListItem = styled.li`
  position: relative;
  float: left;
  width: 100%;
  height: 100%;
  list-style: none;
  border-bottom: 1px solid
    ${({ type }) => (type === 'orange' ? 'rgba(49, 36, 80, 0.1)' : 'rgba(153, 153, 153, 0.1)')};
  padding-bottom: 0;
  margin-bottom: 25px;
  color: var(--color-purple-dark);
  &:last-child {
    border-bottom: none;
  }
  a > h3 {
    ${Transition}
  }
  &:hover a > h3 {
    color: ${({ hoverColor, type }) => {
    if (hoverColor) return `var(--color-${hoverColor})`
    if (type === 'orange') return 'var(--color-purple-dark)'
    return 'var(--color-orange)'
  }}!important;
  }
`

const StyledListItemFooter = styled.li`
  position: relative;
  float: left;
  list-style: none;
  svg {
    height: 60px;
    width: 60px;
  }
  svg #bg{
    ${Transition}
  }
  svg #icon, svg .icon{
    ${Transition}
  }
  &:hover svg #bg{
    fill: var(--color-orange);
  }
  &:hover svg #icon, &:hover svg .icon{
    stroke: var(--color-white);
  }
  @media ${devices.desktopLarge} {
    svg {
      height: 50px;
      width: 50px;
    }
  }
  @media ${devices.laptopLarge} {
    svg {
      height: 45px;
      width: 45px;
    }
  }
  @media ${devices.laptop} {
    svg {
      height: 50px;
      width: 50px;
    }
  }
`

export {
  StyledListContainer, StyledListContainerFooter, StyledListItem, StyledListItemFooter,
}
