import { createGlobalStyle } from 'styled-components'

const Base = createGlobalStyle`
  p{
    margin-bottom: 0px!important;
  }
  .has-error .ant-form-explain, .has-error .ant-form-split {
    margin-top: 0.5rem;
    font-size: 1rem!important;
    color: var(--color-white)!important;
  }
  .has-error .ant-input{
    border-color: var(--color-orange)!important;
  }
  .ant-form-item-label{
    margin-top: 15px!important;
  }
  a{
    text-decoration: none!important;
  }
`

export default Base
