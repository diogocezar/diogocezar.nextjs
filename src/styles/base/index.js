import { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle`
  p{
    margin-bottom: 0px!important;
  }
  a{
    text-decoration: none!important;
  }

  .fade-custom {
    transition: opacity 0.4s ease-in-out;
  }
  .visible-custom {
    opacity: 1;
  }
  .hidden-custom {
    opacity: 0;
  }

`;

export default Base;
