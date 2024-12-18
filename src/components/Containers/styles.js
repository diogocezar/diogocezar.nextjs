import styled from "styled-components";
import { devices } from "@/styles/devices";

const StyledPage = styled.div`
  background-color: ${({ color }) =>
    `var(--color-${color})` || "var(--color-purple)"}!important;
  background-image: url("assets/images/bg/bg.svg");
  background-repeat: no-repeat;
  background-position: top right;
  opacity: 1;
  position: relative;
  float: left;
  padding-bottom: ${({ paddingBottom }) =>
    paddingBottom || "var(--size-s1)"}!important;
  width: 100%;
  ${({ decoration, decorationColor }) => {
    if (decoration) {
      return `
        padding-top: 40px;
        &::before,
        &::after {
          position: absolute;
          content: '';
          pointer-events: none;
          content: '';
          right: 0;
          left: 0;
          z-index: 10;
          display: block;
          height: 90px;
          background-size: 50px 100%;
        }
      `;
    }
  }}
`;

const StyledSection = styled.section`
  position: relative;
  float: left;
  width: 100%;
  padding-bottom: var(--size-s4);
  @media ${devices.laptop} {
    &:last-child {
      padding-bottom: ${({ isLast }) =>
        isLast ? "var(--size-s1)" : "var(--size-s4)"}!important;
    }
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--size-s6);
  padding-right: var(--size-s6);
  padding-bottom: var(--size-s5);
  padding-top: var(--size-s5);
  @media ${devices.desktopLarge} {
    padding-bottom: var(--size-s5);
    padding-top: var(--size-s5);
    padding-left: var(--size-s5);
    padding-right: var(--size-s5);
  }
  @media ${devices.laptopLarge} {
    padding-left: var(--size-s4);
    padding-right: var(--size-s4);
  }
  @media ${devices.tablet} {
    padding-bottom: var(--size-s3);
    padding-top: var(--size-s1);
    padding-left: var(--size-s2);
    padding-right: var(--size-s2);
  }
`;

export { StyledPage, StyledSection, StyledWrapper };
