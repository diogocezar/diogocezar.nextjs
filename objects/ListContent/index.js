import React from 'react'
import {
  StyledListTitle, StyledListMenu, StyledListSubTitle, StyledListContent, StyledListContentMain,
} from './styles'

const ListMenu = props => (
  <StyledListMenu {...props}>
    <span data-hover={props.children}>{props.children}</span>
  </StyledListMenu>
)

const ListTitle = ({ children, ...props }) => (
  <StyledListTitle {...props}>{children}</StyledListTitle>
)
const ListSubTitle = ({ children, ...props }) => (
  <StyledListSubTitle {...props}>{children}</StyledListSubTitle>
)
const ListContent = ({ children, ...props }) => (
  <StyledListContent {...props}>{children}</StyledListContent>
)

const ListContentMain = ({ children, ...props }) => (
  <StyledListContentMain {...props}>{children}</StyledListContentMain>
)

export {
  ListTitle, ListSubTitle, ListContent, ListMenu, ListContentMain,
}
