import React from "react";
import { StyledButton, StyledButtonList, StyedButtonIcon } from "./styles";

const Button = (props) => (
  <StyledButton {...props}>{props.children}</StyledButton>
);

const ButtonIcon = (props) => (
  <StyedButtonIcon {...props}>{props.children}</StyedButtonIcon>
);

const ButtonList = (props) => (
  <StyledButtonList {...props}>{props.children}</StyledButtonList>
);

export default Button;
export { ButtonList, ButtonIcon };
