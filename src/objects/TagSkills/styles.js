import styled from "styled-components";
import { devices } from "@/styles/devices";

const StyledTagSkills = styled.ul`
  display: flex;
  width: 100%;
  position: relative;
  float: left;
  margin-bottom: 20px;
  flex-wrap: wrap;
  @media ${devices.tablet} {
    justify-content: center;
    align-items: center;
  }
  @media ${devices.tablet} {
    display: none;
  }
`;

const StyledTagSkill = styled.li`
  text-transform: uppercase !important;
  font-family: "obviously", sans-serif;
  font-weight: bold;
  border-radius: 20px;
  background-color: var(--color-purple-dark-alternative);
  padding: 10px 17px;
  line-height: normal;
  font-size: 1rem;
  letter-spacing: 1px;
  margin: 5px;
  color: var(--color-white);
  cursor: pointer;
  border: none;
  position: relative;
  z-index: 1;
  -webkit-backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  &:hover {
    color: var(--color-purple) !important;
    background-color: var(--color-white) !important;
  }
  @media ${devices.laptopLarge} {
    font-size: 0.8rem;
  }
  @media ${devices.laptop} {
    font-size: 0.7rem;
  }
`;

export { StyledTagSkills, StyledTagSkill };
