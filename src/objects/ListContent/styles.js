import styled from "styled-components";
import { devices } from "@/styles/devices";

const StyledListTitle = styled.h3`
  font-family: "obviously", sans-serif;
  font-weight: bold;
  font-size: 2.6rem;
  text-transform: uppercase;
  line-height: 3rem;
  margin-bottom: 5px !important;
  text-decoration: none !important;
  color: ${({ type }) =>
    type === "orange" ? "var(--color-purple-dark)" : "var(--color-orange)"};
  @media ${devices.desktop} {
    font-size: 2.5rem;
    line-height: 2.9rem;
  }
  @media ${devices.laptopLarge} {
    font-size: 2.4rem;
    line-height: 2.8rem;
  }
  @media ${devices.laptop} {
    font-size: 2.2rem;
    line-height: 2.6rem;
    margin-bottom: 10px !important;
    text-align: center;
  }
  @media ${devices.tablet} {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

const StyledListSubTitle = styled.p`
  font-family: "obviously", sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  text-transform: uppercase;
  line-height: 2.6rem;
  margin-bottom: 13px !important;
  text-decoration: none !important;
  color: ${({ type }) => {
    switch (type) {
      case "orange":
        return "var(--color-orange-dark)";
      case "white":
        return "var(--color-white)";
      default:
        return "var(--color-orange)";
    }
  }};
  @media ${devices.desktop} {
    font-size: 1.4rem;
    line-height: 2.5rem;
  }
  @media ${devices.laptopLarge} {
    font-size: 1.3rem;
    line-height: 2.4rem;
  }
  @media ${devices.laptop} {
    font-size: 1.2rem;
    line-height: 2.3rem;
    text-align: center;
  }
  @media ${devices.tablet} {
    font-size: 1.1rem;
    line-height: 2.2rem;
  }
`;

const StyledListContent = styled.p`
  font-family: "obviously", sans-serif;
  color: var(--color-white);
  font-size: 1rem;
  padding-bottom: var(--size-s1);
  margin-bottom: 0px !important;
  line-height: 2.3rem;
  clear: both;
  @media ${devices.desktop} {
    font-size: 1.2rem;
    line-height: 2.2rem;
  }
  @media ${devices.laptopLarge} {
    font-size: 1.1rem;
    line-height: 2.1rem;
  }
  @media ${devices.laptop} {
    font-size: 0.9rem;
    line-height: 1.4rem;
    text-align: center;
    display: ${({ menuMain }) => (menuMain ? "none" : "block")};
  }
`;

const StyledListContentMain = styled(StyledListContent)`
  position: relative;
  float: left;
  margin-top: 1.7rem;
`;

const StyledListMenu = styled.div`
  font-family: "obviously", sans-serif;
  font-weight: bold;
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 0x !important;
  text-decoration: none !important;
  color: var(--color-white);
  text-align: center;
  line-height: 3rem;
  @media ${devices.desktop} {
    font-size: 2.5rem;
    line-height: 2.9rem;
  }
  @media ${devices.laptopLarge} {
    font-size: 2.4rem;
    line-height: 2.8rem;
  }
  @media ${devices.laptop} {
    font-size: 2.2rem;
    line-height: 2.6rem;
    margin-bottom: 20px !important;
    text-align: center;
    display: flex;
    justify-content: center;
  }
  @media ${devices.tablet} {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  span {
    position: relative;
    clear: both;
    float: left;
    font-size: 1.7rem;
    padding: 7px 35px !important;
    background: var(--color-orange);
    transition: transform 0.15s;
    transform-origin: 50% 0;
    transform-style: preserve-3d;
    margin-bottom: 0px;
    border-radius: 50px;
    padding-top: 13px !important;
    @media ${devices.laptop} {
      font-size: 1.3rem;
      width: 70%;
    }
    @media ${devices.tablet} {
      width: 80%;
    }
  }
  span::before {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    background: var(--color-orange-dark);
    content: attr(data-hover);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.15s ease;
    transform: rotateX(-90deg);
    transform-origin: 50% 0;
    padding-top: 9px !important;
    @media ${devices.laptop} {
      float: none;
    }
  }

  &:hover span,
  &:focus span {
    -webkit-transform: rotateX(90deg) translateY(-22px);
    -moz-transform: rotateX(90deg) translateY(-22px);
    transform: rotateX(90deg) translateY(-22px);
  }

  &hover span::before,
  &:focus span::before {
    background: #28a2ee;
  }
`;

export {
  StyledListTitle,
  StyledListSubTitle,
  StyledListContent,
  StyledListMenu,
  StyledListContentMain,
};
