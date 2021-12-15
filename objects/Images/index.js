import React from 'react'
import { StyledImage, StyledImageItemColumn } from './styles'

const Image = props => <StyledImage {...props} src="/assets/images/perfil/perfil.png"/>
const ImageItemColumn = props => <StyledImageItemColumn {...props} />

export default Image
export { ImageItemColumn }
