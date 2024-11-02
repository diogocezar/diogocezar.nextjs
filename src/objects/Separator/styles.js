import styled from "styled-components";
import { devices } from "@/styles/devices";

const StyledSeparator = styled.header`
  width: 100%;
  border-bottom: 1px solid
    ${({ type }) =>
      type === "orange"
        ? "rgba(49, 36, 80, 0.36)"
        : "rgba(153, 153, 153, 0.36)"};
  padding-bottom: 5px;
  margin-bottom: var(--size-s5);
  text-transform: uppercase;
  @media ${devices.laptop} {
    padding-bottom: 5px;
    margin-bottom: var(--size-s3);
  }
  h2 {
    color: var(--color-white);
    font-family: "obviously", sans-serif;
    font-weight: 500;
    font-size: 1.3rem;
    margin-bottom: 10px !important;
    @media ${devices.laptop} {
      font-size: 1.6rem;
    }
    span {
      font-family: "obviously-wide", sans-serif;
      font-weight: bold;
      font-size: 3rem;
      font-style: normal;
      color: ${({ type }) =>
        type === "orange"
          ? "var(--color-purple-dark);"
          : "var(--color-orange);"}!important;
      margin-right: 10px;
      @media ${devices.laptop} {
        font-size: 1.8rem;
      }
    }
  }
`;

const StyledLineSeparator = styled.div`
  position: relative;
  float: left;
  width: 100%;
  margin-top: 30px;
  border-bottom: 1px solid
    ${({ type }) =>
      type === "orange"
        ? "rgba(49, 36, 80, 0.36)"
        : "rgba(153, 153, 153, 0.36)"};
  padding-bottom: 5px;
  margin-bottom: var(--size-s5);
  @media ${devices.laptop} {
    padding-bottom: 5px;
    margin-bottom: var(--size-s3);
  }
`;

export { StyledSeparator, StyledLineSeparator };
