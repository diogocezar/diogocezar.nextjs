import styled from 'styled-components'

const StyledFormItem = FormItem => styled(FormItem)`
  margin-bottom: 5px !important;
  position: relative;
  float: left;
  width: 100%;
  label {
    font-family: 'AkzidenzGroteskBE';
    font-weight: bold;
    font-size: 1.2rem;
    font-style: normal;
    color: var(--color-orange) !important;
    text-transform: uppercase !important;
    margin-right: 10px;
    &:before {
      display: none !important;
    }
  }
`

const StyledInput = Input => styled(Input)`
  width: 100% !important;
  border-radius: 0px !important;
  height: 60px !important;
  padding: 5px 10px !important;
  color: var(--color-purple-dark) !important;
  font-family: 'AkzidenzGroteskBE' !important;
  font-weight: bold !important;
  font-size: 1.3rem !important;
`

const StyledTextArea = TextArea => styled(TextArea)`
  width: 100% !important;
  border-radius: 0px !important;
  height: 100px !important;
  padding: 5px 10px !important;
  color: var(--color-purple-dark) !important;
  font-family: 'AkzidenzGroteskBE' !important;
  font-weight: bold !important;
  font-size: 1rem !important;
`

export { StyledFormItem, StyledInput, StyledTextArea }
