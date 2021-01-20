import React from 'react'
import { Form as FormAntd, Input as InputAntd } from 'antd'
import { StyledFormItem, StyledInput, StyledTextArea } from './styles'

const FormItemStyled = StyledFormItem(FormAntd.Item)
const InputStyled = StyledInput(InputAntd)
const TextAreaStyled = StyledTextArea(InputAntd.TextArea)

const FormItem = props => <FormItemStyled {...props} />
const Input = React.forwardRef((props, ref) => <InputStyled {...props} ref={ref} />)
const TextArea = React.forwardRef((props, ref) => <TextAreaStyled {...props} ref={ref} />)

export { FormItem, TextArea, Input }
