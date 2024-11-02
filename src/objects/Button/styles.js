import styled from "styled-components";
import { devices } from "@/styles/devices";

const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 20px 60px;
  border-radius: 50px !important;
  text-transform: uppercase;
  margin-right: ${({ right }) => right || "var(--size-s1)"};
  font-family: "obviously", sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 1px;
  height: 80px;
  cursor: pointer;
  margin-bottom: ${({ marginBottom }) => marginBottom || "var(--size-s1)"};
  min-width: 180px;
  float: left;
  border: none;
  background: none;
  position: relative;
  z-index: 1;
  -webkit-backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  background: ${({ type }) =>
    type === "orange" ? "var(--color-orange)" : "var(--color-white)"};
  color: ${({ type }) =>
    type === "orange" ? "var(--color-white)" : "var(--color-purple-dark)"};
  overflow: hidden;
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
  box-shadow: 2px 0px 10px 2px rgba(0, 0, 0, 0.1);
  @media ${devices.laptopLarge} {
    margin-bottom: 10px !important;
  }
  @media ${devices.laptop} {
    font-size: 0.8rem;
    height: 60px;
    padding: 20px 40px;
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 110%;
    width: 110%;
    bottom: 100%;
    left: 0;
    z-index: -1;
    -webkit-transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
    -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
  }
  &::before {
    background: ${({ type }) => {
      switch (type) {
        case "orange":
          return "var(--color-white)";
        case "purple":
          return "var(--color-orange-dark)";
        default:
          return "var(--color-purple-dark)";
      }
    }};
  }
  &::after {
    background: ${({ type }) => {
      switch (type) {
        case "orange":
          return "var(--color-white-pure)";
        case "purple":
          return "var(--color-orange)";
        default:
          return "var(--color-purple)";
      }
    }};
  }
  &:hover {
    color: ${({ type }) =>
      type === "orange" ? "var(--color-purple-dark)" : "var(--color-white)"};
  }
  &:hover::before,
  &:hover::after {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  &:hover::after {
    -webkit-transition-delay: 0.175s;
    transition-delay: 0.175s;
  }
`;

const StyledButton = styled(BaseButton)`
  margin-top: 40px;
  @media ${devices.laptopLarge} {
    margin-top: 10px;
  }
  @media ${devices.laptop} {
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
  }
  @media ${devices.tablet} {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }
  div {
    margin-top: -3px !important;
  }
`;

const StyledButtonList = styled(BaseButton)`
  @media ${devices.laptopLarge} {
    margin-top: 10px;
  }
  @media ${devices.laptop} {
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
  }
  @media ${devices.tablet} {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }
`;

const StyedButtonIcon = styled(BaseButton)`
  min-width: 70px !important;
  width: 70px;
  height: 70px;
  padding: 0px;
`;

export { StyledButton, StyledButtonList, StyedButtonIcon };
