import React from 'react'
import {
  StyledLeftContent,
  StyledRightContent,
  StyledLeftContentList,
  StyledRightContentList,
  StyledFullContent,
  StyledCenter,
} from './styles'

const LeftContent = ({ children }) => <StyledLeftContent>{children}</StyledLeftContent>
const RightContent = ({ children }) => <StyledRightContent>{children}</StyledRightContent>
const FullContent = ({ children }) => <StyledFullContent>{children}</StyledFullContent>
const CenterContent = ({ children }) => <StyledCenter>{children}</StyledCenter>
const LeftContentList = ({ children }) => <StyledLeftContentList>{children}</StyledLeftContentList>
const RightContentList = ({ children }) => (
  <StyledRightContentList>{children}</StyledRightContentList>
)

export {
  LeftContent, RightContent, FullContent, LeftContentList, RightContentList, CenterContent,
}
