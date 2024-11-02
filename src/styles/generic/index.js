import { createGlobalStyle } from "styled-components";

const Generic = createGlobalStyle`
	* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
	}
  ::selection {
    background-color: var(--color-orange)!important;
    color: var(--color-white)!important;
  }
	body {
    font-family: 'AGaramondPro'!important;
    font-size: 14px!important;
    text-rendering: optimizeLegibility!important;
    -webkit-font-smoothing: antialiased!important;
    background-color: var(--color-purple-dark-alternative)!important;
	}

  body::-webkit-scrollbar {
    width: 0.25rem;
  }

  body::-webkit-scrollbar-track {
    background: #1e1e24;
  }

  body::-webkit-scrollbar-thumb {
    background: #23232e;
  }

  body::-webkit-scrollbar {
    width: 0.7rem;
  }

  body::-webkit-scrollbar-track {
    background: #1e1e24;
  }

  body::-webkit-scrollbar-thumb {
    background: #0e0e13;
  }
`;

export default Generic;
