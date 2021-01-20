import { createGlobalStyle } from 'styled-components'

const Generic = createGlobalStyle`
	* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
	}
  ::selection {
    background-color: var(--color-purple-dark)!important;
    color: var(--color-white)!important;
  }
	body {
    font-family: 'AGaramondPro'!important;
    font-size: 14px!important;
    text-rendering: optimizeLegibility!important;
    -webkit-font-smoothing: antialiased!important;
    background-color: var(--color-purple-dark)!important;
	}
`

export default Generic
