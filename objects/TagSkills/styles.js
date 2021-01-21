import styled from 'styled-components'
import { devices } from '@/styles/devices'

const StyledTagSkills = styled.ul`
  display: flex;
  width: 100%;
  position: relative;
  float: left;
  flex-wrap: wrap;
  @media ${devices.tablet} {
    justify-content: center;
    align-items: center;
  }
`

const StyledTagSkill = styled.li`
  display: inline-block;
  font-family: 'AkzidenzGroteskBE';
  border-radius: 0px;
  background-color: var(--color-purple-dark);
  padding: 5px 15px;
  font-size: 0.8rem;
  letter-spacing: 1px;
  margin: 5px;
  color: var(--color-white);
  padding-top: 8px;
  cursor: pointer;
  border: none;
  position: relative;
  z-index: 1;
  -webkit-backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 100%;
    margin: -15px 0 0 1px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: var(--color-white);
    transform-origin: 100% 50%;
    transform: scale3d(1, 2, 1);
    transition: transform 0.1s, opacity 0.1s;
    transition-timing-function: cubic-bezier(0.7, 0, 0.9, 1);
  }
  &:hover {
    color: var(--color-purple) !important;
  }
  &:hover::before {
    transform: scale3d(9, 9, 1);
  }
  @media ${devices.desktop} {
    font-size: 0.7rem;
  }
  @media ${devices.tablet} {
    font-size: 0.6rem;
  }
`

export { StyledTagSkills, StyledTagSkill }
