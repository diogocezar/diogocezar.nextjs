import React from 'react'
import {
  StyledListContainer,
  StyledListContainerFooter,
  StyledListItem,
  StyledListItemFooter,
} from './styles'

const ListContainer = ({ children, ...props }) => (
  <StyledListContainer {...props}>{children}</StyledListContainer>
)
const ListContainerFooter = ({ children, ...props }) => (
  <StyledListContainerFooter {...props}>{children}</StyledListContainerFooter>
)
const ListItem = ({ children, ...props }) => <StyledListItem {...props}>{children}</StyledListItem>
const ListItemFooter = ({ children, ...props }) => (
  <StyledListItemFooter {...props}>{children}</StyledListItemFooter>
)

export {
  ListContainer, ListContainerFooter, ListItem, ListItemFooter,
}
