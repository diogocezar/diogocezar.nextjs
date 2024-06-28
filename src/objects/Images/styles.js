import styled from "styled-components";
import { devices } from "@/styles/devices";

const StyledImage = styled.img`
  border-radius: 50%;
  width: 85%;
  margin: 0 auto;
  display: block;
  opacity: 0.9;
  border: var(--color-white) 8px solid;
  @media ${devices.desktopLarge} {
    width: 85%;
    margin-top: 0;
    border: var(--color-white) 8px solid;
  }
  @media ${devices.desktop} {
    width: 100%;
    margin-top: 0;
    border: var(--color-white) 7px solid;
  }
  @media ${devices.laptopLarge} {
    width: 50%;
    margin-top: 0;
    margin-bottom: var(--size-s3);
    border: var(--color-white) 6px solid;
  }
  @media ${devices.laptop} {
    width: 50%;
    margin-top: 0;
    margin-bottom: var(--size-s3);
    border: var(--color-white) 5px solid;
  }
  @media ${devices.mobileLarge} {
    width: 50%;
    margin-top: 0;
    margin-bottom: var(--size-s3);
    border: var(--color-white) 4px solid;
  }
`;

const StyledImageItemColumn = styled.img`
  height: 125px;
  width: 125px;
  margin: 0 auto;
  display: block;
  margin-bottom: var(--size-s3);
  border-radius: 50%;
  box-shadow: 2px 0px 10px 2px rgba(0, 0, 0, 0.1);
  @media ${devices.laptopLarge} {
    height: 100px !important;
    width: 100px !important;
  }
  @media ${devices.laptop} {
    height: 80px !important;
    width: 80px !important;
  }
  @media ${devices.mobileLarge} {
    height: 125px !important;
    width: 125px !important;
  }
`;

export { StyledImage, StyledImageItemColumn };
