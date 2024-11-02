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

  @keyframes float-custom {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  .floating-image-custom {
    animation: float-custom 3s ease-in-out infinite;
  }

`;

export default Base;
