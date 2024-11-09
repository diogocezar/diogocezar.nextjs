import { createGlobalStyle } from "styled-components";

const Generic = createGlobalStyle`
	* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
	}

	body {
    font-size: 14px!important;
    text-rendering: optimizeLegibility!important;
    -webkit-font-smoothing: antialiased!important;
    background-color: var(--color-purple-dark-alternative)!important;
	}

	*::-webkit-scrollbar {
      width: 0.25rem;
  }

  *::-webkit-scrollbar-track {
      background: #0e0f12;
      border-radius: 0.25rem;
  }

  *::-webkit-scrollbar-thumb {
      background: #ea00a4;
      border-radius: 0.25rem;
  }

  *::-webkit-scrollbar {
      width: 0.7rem;
  }

  *::-webkit-scrollbar-track {
      background: #0e0f12;
  }

  *::-webkit-scrollbar-thumb {
      background: #ea00a4;
  }

  ::selection {
      background-color: #ea00a4 !important;
      color: #f8f8f2 !important;
  }
`;

export default Generic;
