import styled from "styled-components";
import { devices } from "@/styles/devices";

const StyledFooter = styled.footer`
  position: relative;
  float: left;
  width: 100%;
  background-color: var(--color-purple-dark-alternative);
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: var(--size-s4);
  display: flex;
  padding-left: var(--size-s6);
  padding-right: var(--size-s6);
  padding-bottom: var(--size-s2);
  padding-top: ${({ isMain }) =>
    isMain ? "var(--size-s5)" : "var(--size-s1)"}!important;
  @media ${devices.desktopLarge} {
    padding-bottom: var(--size-s2);
    padding-left: var(--size-s6);
    padding-right: var(--size-s6);
  }
  @media ${devices.laptopLarge} {
    padding-bottom: var(--size-s3);
    padding-left: var(--size-s3);
    padding-right: var(--size-s3);
  }
  @media ${devices.laptop} {
    display: block;
  }
  @media ${devices.tablet} {
    padding-bottom: 80px;
  }
  &::before,
  &::after {
    position: absolute;
    content: "";
    pointer-events: none;
    content: "";
    right: 0;
    left: 0;
    z-index: 10;
    display: block;
    height: 90px;
    background-size: 50px 100%;
  }

  /* &::before {
    top: -90px;
    background-image: -webkit-gradient(
      linear,
      0 0,
      300% 100%,
      color-stop(0.25, transparent),
      color-stop(0.25, var(--color-purple-dark))
    );
    background-image: linear-gradient(315deg, var(--color-purple-dark) 25%, transparent 25%),
      linear-gradient(45deg, var(--color-purple-dark) 25%, transparent 25%);
    background-position: 50%;
  } */
`;

const StyledColumnFooter = styled.div`
  width: 33.33%;
  @media ${devices.laptopLarge} {
    position: relative;
    float: left;
    width: 100% !important;
    margin-bottom: var(--size-s3);
    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

const StyledTitleFooter = styled.h3`
  font-family: "AkzidenzGroteskBE";
  font-weight: bold;
  font-size: 1.8rem;
  text-transform: uppercase;
  line-height: 2.5rem;
  margin-bottom: 1.5rem;
  text-decoration: none !important;
  text-align: ${({ align }) => align || "center"};
  color: var(--color-orange) !important;
  @media ${devices.laptopLarge} {
    text-align: center;
  }
`;

const StyledContentFooter = styled.div`
  color: var(--color-white);
  font-family: "AGaramondPro";
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: var(--size-s3);
  text-align: ${({ align }) => align || "center"};
  padding: ${({ align }) => {
    switch (align) {
      case "center":
        return "0 25%";
      case "left":
        return "0 25% 0 0";
      case "right":
        return "0 0 0 25%";
      default:
        return "0 25%";
    }
  }};
  @media ${devices.desktopLarge} {
    padding: ${({ align }) => {
      switch (align) {
        case "center":
          return "0 15%";
        case "left":
          return "0 15% 0 0";
        case "right":
          return "0 0 0 15%";
        default:
          return "0 15%";
      }
    }};
  }
  @media ${devices.desktop} {
    font-size: 1.3rem;
    line-height: 1.8rem;
    padding: ${({ align }) => {
      switch (align) {
        case "center":
          return "0 10%";
        case "left":
          return "0 10% 0 0";
        case "right":
          return "0 0 0 10%";
        default:
          return "0 10%";
      }
    }};
  }
  @media ${devices.laptop} {
    font-size: 1.2rem;
    line-height: 1.6rem;
    padding: ${({ align }) => {
      switch (align) {
        case "center":
          return "0 5%";
        case "left":
          return "0 5% 0 0";
        case "right":
          return "0 0 0 5%";
        default:
          return "0 5%";
      }
    }};
  }
  @media ${devices.laptopLarge} {
    padding: 0;
    text-align: center;
  }
  a {
    color: var(--color-orange) !important;
    text-decoration: none;
  }
`;

export {
  StyledFooter,
  StyledColumnFooter,
  StyledTitleFooter,
  StyledContentFooter,
};
