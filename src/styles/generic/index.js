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
    font-size: 14px!important;
    text-rendering: optimizeLegibility!important;
    -webkit-font-smoothing: antialiased!important;
    background-color: var(--color-purple-dark-alternative)!important;
	}

  body::-webkit-scrollbar {
    width: 0.25rem;
    border-radius: 0.25rem;
  }

  body::-webkit-scrollbar-track {
    background: #160830;
    border-radius: 0.25rem;
  }

  body::-webkit-scrollbar-thumb {
    background: #f75cc8;
  }

  body::-webkit-scrollbar {
    width: 0.7rem;
  }

  body::-webkit-scrollbar-track {
    background: #1e1e24;
  }

  body::-webkit-scrollbar-thumb {
    background: #f75cc8;
  }
`;

export default Generic;
