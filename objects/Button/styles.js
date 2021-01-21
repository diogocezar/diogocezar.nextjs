import styled from 'styled-components'
import { devices } from '@/styles/devices'

const BaseButton = styled.button`
  padding: 20px 26px;
  border-radius: 0px!important;
  text-transform: uppercase;
  margin-right: ${({ right }) => right || 'var(--size-s1)'};
  font-family: 'AkzidenzGroteskBE';
  font-weight: bold;
  font-size: 1rem;
  height: 60px;
  cursor: pointer;
  margin-bottom: ${({ marginBottom }) => marginBottom || 'var(--size-s1)'};
  min-width: 180px;
  float: left;
  display: block;
  border: none;
  background: none;
  position: relative;
  z-index: 1;
  -webkit-backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  background: ${({ type }) => (type === 'orange' ? 'var(--color-orange)' : 'var(--color-white)')};
  color: ${({ type }) => (type === 'orange' ? 'var(--color-white)' : 'var(--color-purple-dark)')};
  overflow: hidden;
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
  box-shadow: 2px 0px 10px 2px rgba(0,0,0,0.1);
  @media ${devices.laptopLarge} {
    margin-bottom: 10px !important;
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 110%;
    width: 110%;
    bottom: 100%;
    left: 0;
    z-index: -1;
    -webkit-transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
    -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
  }
  &::before {
    background: ${({ type }) => {
    switch (type) {
      case 'orange':
        return 'var(--color-white)'
      case 'purple':
        return 'var(--color-orange-dark)'
      default:
        return 'var(--color-purple-dark)'
    }
  }};
  }
  &::after {
    background: ${({ type }) => {
    switch (type) {
      case 'orange':
        return 'var(--color-white-pure)'
      case 'purple':
        return 'var(--color-orange)'
      default:
        return 'var(--color-purple)'
    }
  }};
  }
  &:hover {
    color: ${({ type }) => (type === 'orange' ? 'var(--color-purple-dark)' : 'var(--color-white)')};
  }
  &:hover::before,
  &:hover::after {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  &:hover::after {
    -webkit-transition-delay: 0.175s;
    transition-delay: 0.175s;
  }
`

const StyledButton = styled(BaseButton)`
  margin-top: 40px;
  @media ${devices.laptopLarge} {
    margin-top: 10px;
  }
  @media ${devices.laptop} {
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
  }
  @media ${devices.tablet} {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }
`

const StyledButtonList = styled(BaseButton)`
  @media ${devices.laptopLarge} {
    margin-top: 10px;
  }
  @media ${devices.laptop} {
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
  }
  @media ${devices.tablet} {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }
`

const StyledButtonBackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: ${({ color }) => {
    switch (color) {
      case 'orange':
        return 'var(--color-white-pure)'
      case 'purple':
        return 'var(--color-orange)'
      default:
        return 'var(--color-black)'
    }
  }};
  top: 30px;
  left: 8vw;
  transition: all 0.15s ease-in !important;
  z-index: 9998 !important;
  box-shadow: 2px 0px 15px 2px rgba(0,0,0,0.2);
  &.display-true {
    display: flex;
    opacity: 100;
  }
  &.display-false {
    display: hidden;
    opacity: 0;
  }
  &:hover{
    svg{
      .st0{
        transition: all 0.15s ease-in !important;
        stroke: ${({ color }) => {
    switch (color) {
      case 'orange':
        return 'var(--color-purple-dark)'
      default:
        return 'var(--color-orange)'
    }
  }};
      }
    }
  }
  svg{
    position: absolute;
    top: 4px;
    left: 0;
    height: 40px;
    width: 100%;
    .st0{
      transition: all 0.15s ease-in !important;
      stroke: ${({ color }) => {
    switch (color) {
      case 'orange':
        return 'var(--color-orange)'
      default:
        return 'var(--color-white)'
    }
  }};
    }
  }
  @media ${devices.laptopLarge} {
    left: 5vw;
  }
  @media ${devices.desktop} {
    left: 4vw;
  }
  @media ${devices.laptopLarge} {
    left: 5vw;
  }
  @media ${devices.laptop} {
    width: 80px;
    height: 80px;
    left: 5vw;
    top: 5vw;
    svg{
      top: 6px;
      left: 0;
      height: 30px;
      width: 100%;
    }
  }
  @media ${devices.tablet} {
    width: 70px;
    height: 70px;

  }
  @media ${devices.mobileLarge} {
  }
  @media ${devices.mobileMedium} {

  }
  @media ${devices.mobileSmall} {

  }
`

const StyledButtonBack = styled(BaseButton)`
  font-size: 1.3rem;
  background: none!important;
  color: var(--color-white)!important;
  box-shadow: none!important;
  margin-top: 14px;
  height: 45px;
  line-height: 20px;
  &::before, &::after, &:hover {
    background: none!important;
  };
`

export {
  StyledButton, StyledButtonList, StyledButtonBack, StyledButtonBackContainer,
}
