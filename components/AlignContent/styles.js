import styled from 'styled-components'
import { devices } from '@/styles/devices'

const StyledLeftContent = styled.div`
  width: 32.27805%;
  float: left;
  margin-right: 1.58293%;
  @media ${devices.desktop} {
    width: 23%;
  }
  @media ${devices.laptopLarge} {
    width: 100%;
    margin-right: 0;
  }
`

const StyledRightContent = styled.div`
  width: 66.13902%;
  float: right;
  margin-right: 0;
  @media ${devices.desktop} {
    width: 67%;
  }
  @media ${devices.laptopLarge} {
    width: 100%;
  }
`

const StyledFullContent = styled.div`
  width: 100%;
  float: left;
  position: relative;
`

const StyledLeftContentList = styled.div`
  width: 80%;
  position: relative;
  float: left;
  height: 100%;
  @media ${devices.laptop} {
    width: 100%;
  }
`

const StyledRightContentList = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  float: right;
  margin-right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media ${devices.laptop} {
    margin-bottom: var(--size-s2);
    position: relative;
    float: left;
    width: 100%;
  }
`

const StyledCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export {
  StyledLeftContent,
  StyledRightContent,
  StyledLeftContentList,
  StyledRightContentList,
  StyledFullContent,
  StyledCenter,
}
