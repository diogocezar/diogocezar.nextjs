import React from "react";
import {
  StyledFooter,
  StyledColumnFooter,
  StyledTitleFooter,
  StyledContentFooter,
  StyledImageCenterFooter,
} from "./styles";

const Footer = (props) => (
  <StyledFooter {...props}>{props.children}</StyledFooter>
);
const ColumnFooter = ({ children, ...props }) => (
  <StyledColumnFooter {...props}>{children}</StyledColumnFooter>
);
const TitleFooter = ({ children, ...props }) => (
  <StyledTitleFooter {...props}>{children}</StyledTitleFooter>
);
const ContentFooter = ({ children, ...props }) => (
  <StyledContentFooter {...props}>{children}</StyledContentFooter>
);

const ContentImageCenter = ({ children, ...props }) => (
  <StyledImageCenterFooter {...props}>{children}</StyledImageCenterFooter>
);

export default Footer;
export { ColumnFooter, TitleFooter, ContentFooter, ContentImageCenter };
