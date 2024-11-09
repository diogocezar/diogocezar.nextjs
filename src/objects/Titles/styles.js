import styled from "styled-components";
import { devices } from "@/styles/devices";

const StyledTitle = styled.h2`
  position: relative;
  float: left;
  width: 100%;
  font-family: "obviously", sans-serif;
  font-weight: bold;
  font-size: ${({ type }) => (type === "internal" ? "6rem" : "5.5rem")};
  text-transform: ${({ type }) =>
    type === "internal" ? "normal" : "uppercase"};
  color: ${({ color }) =>
    color ? `var(--color-${color})` : "var(--color-orange)"};
  line-height: ${({ type }) => (type === "internal" ? "6.5rem" : "4.3rem")};
  margin-bottom: ${({ type }) => (type === "internal" ? "5rem" : "1rem")};
  @media ${devices.desktopLarge} {
    font-size: ${({ type }) => (type === "internal" ? "6rem" : "5rem")};
    line-height: ${({ type }) => (type === "internal" ? "6.5rem" : "4rem")};
  }
  @media ${devices.laptopLarge} {
    font-size: ${({ type }) => (type === "internal" ? "4rem" : "3.5rem")};
    line-height: ${({ type }) => (type === "internal" ? "4.5rem" : "3rem")};
    text-align: center;
  }
  @media ${devices.tablet} {
    font-size: ${({ type }) => (type === "internal" ? "3rem" : "3.5rem")};
    line-height: ${({ type }) => (type === "internal" ? "3.4rem" : "2.5rem")};
    margin-bottom: ${({ type }) =>
      type === "internal" ? "var(--size-s3)" : "var(--size-s2)"};
  }
  @media ${devices.mobileLarge} {
    font-size: ${({ type }) => (type === "internal" ? "3rem" : "2.5rem")};
    line-height: ${({ type }) => (type === "internal" ? "3.4rem" : "1.5rem")};
  }
  @media ${devices.mobileMedium} {
    font-size: ${({ type }) => (type === "internal" ? "3rem" : "2rem")};
    line-height: ${({ type }) => (type === "internal" ? "3.4rem" : "1.5rem")};
  }
`;

const StyledSubTitle = styled.h3`
  position: relative;
  float: left;
  width: 100%;
  font-family: "obviously", sans-serif;
  font-weight: 600;
  font-size: 2rem !important;
  text-transform: uppercase;
  line-height: 3rem;
  color: ${({ color }) =>
    color ? `var(--color-${color})` : "var(--color-orange)"};
  margin-bottom: ${({ type }) =>
    type === "internal" ? "var(--size-s3)" : "2rem"};
  margin-top: 0.5rem;
  @media ${devices.desktopLarge} {
    font-size: 2rem;
    line-height: 4rem;
  }
  @media ${devices.laptopLarge} {
    font-size: 1.3rem;
    line-height: 2rem;
    text-align: center;
    margin-bottom: var(--size-s3);
  }
`;

const StyledTitleItemColumn = styled.h3`
  position: relative;
  float: left;
  width: 100%;
  font-family: "obviously", sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  line-height: 2rem;
  color: ${({ color }) =>
    color ? `var(--color-${color})` : "var(--color-white)"};
  margin-bottom: var(--size-s1);
`;

export { StyledTitle, StyledSubTitle, StyledTitleItemColumn };
