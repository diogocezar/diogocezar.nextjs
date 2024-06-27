import styled from "styled-components";
import { devices } from "@/styles/devices";

const StyledPage = styled.div`
  background-color: ${({ color }) =>
    `var(--color-${color})` || "var(--color-purple)"}!important;
  opacity: 1;
  background-image: radial-gradient(
      rgba(
          255,
          255,
          255,
          ${({ color }) => (color === "orange" ? "0.04" : "0.02")}
        )
        5px,
      transparent 1.2px
    ),
    radial-gradient(
      rgba(
          255,
          255,
          255,
          ${({ color }) => (color === "orange" ? "0.04" : "0.02")}
        )
        10px,
      ${({ color }) => `var(--color-${color})` || "var(--color-purple)"} 1.2px
    );
  background-size: 100px 100px;
  background-position:
    0 0,
    50px 50px;
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
        &::before {
          top: -90px;
          background-image: -webkit-gradient(
            linear,
            0 0,
            300% 100%,
            color-stop(0.25, transparent),
            color-stop(0.25, var(--color-${decorationColor}))
          );
          background-image: linear-gradient(315deg, var(--color-${decorationColor}) 25%, transparent 25%),
            linear-gradient(45deg, var(--color-${decorationColor}) 25%, transparent 25%);
          background-position: 50%;
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
