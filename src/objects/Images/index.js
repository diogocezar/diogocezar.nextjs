import React from "react";
import { StyledImage, StyledImageItemColumn } from "./styles";

const Image = (props) => (
  <div className="floating-image-custom">
    <StyledImage {...props} src="/assets/images/perfil/avatar.svg" />
  </div>
);
const ImageItemColumn = (props) => <StyledImageItemColumn {...props} />;

export default Image;
export { ImageItemColumn };
