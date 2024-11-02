import styled from "styled-components";
import { devices } from "@/styles/devices";

const StyledQuotedMain = styled.blockquote`
  p {
    color: var(--color-white);
    font-family: "obviously", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 2.7rem;
    margin-bottom: var(--size-s3);
    padding-right: var(--size-s6);
    @media ${devices.desktop} {
      padding-right: 0;
      font-size: 1rem;
      line-height: 2.3rem;
    }
    @media ${devices.laptop} {
      text-align: center;
    }
    @media ${devices.tablet} {
      font-size: 1.2rem;
      line-height: 2rem;
    }
  }
  span {
    font-family: "obviously", sans-serif;
    font-weight: bold;
    font-size: 1rem;
    color: var(--color-white);
    margin-top: var(--size-s3);
    display: inline-block;
    @media ${devices.desktop} {
      font-size: 1.4rem;
      width: 100%;
    }
    @media ${devices.laptop} {
      text-align: center;
    }
    @media ${devices.tablet} {
      font-size: 1.2rem;
    }
  }
`;

const StyledQuotedParagraph = styled.blockquote`
  color: var(--color-white);
  font-family: "obviously", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 2.5rem;
  margin-bottom: var(--size-s4);
  padding-right: var(--size-s6);
  @media ${devices.desktop} {
    padding-right: 0;
    font-size: 1.2rem;
    line-height: 2.4rem;
  }
  @media ${devices.laptop} {
    padding-right: 0;
    font-size: 0.9rem;
    line-height: 1.6rem;
  }
  span {
    font-family: "obviously", sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    @media ${devices.desktop} {
      font-size: 1.3rem;
    }
    @media ${devices.tablet} {
      font-size: 1.2rem;
    }
  }
`;

export { StyledQuotedMain, StyledQuotedParagraph };
