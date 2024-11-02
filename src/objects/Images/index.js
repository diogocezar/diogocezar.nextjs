import React from "react";
import { StyledImage, StyledImageItemColumn } from "./styles";

const Image = (props) => (
  <StyledImage {...props} src="/assets/images/perfil/avatar.svg" />
);
const ImageItemColumn = (props) => <StyledImageItemColumn {...props} />;

export default Image;
export { ImageItemColumn };
