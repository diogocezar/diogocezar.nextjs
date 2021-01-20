import React, { Component } from 'react'

import { Form } from 'antd'

import { Section } from '@/components/Containers'
import { FullContent, CenterContent } from '@/components/AlignContent'
import { Col2, Col1, Row } from '@/components/Grid'

import Separator from '@/objects/Separator'
import Paragraph from '@/objects/Paragraph'
import { FormItem, Input, TextArea } from '@/objects/Form'
import Button from '@/objects/Button'

import { validateEmail, validateName, validateMessage } from '@/helpers/validations'

import ContactService from '@/services/ContactService'

class ContactForm extends Component {
  state = {
    successMessage: null,
  }

  sendForm = async () => {
    const { validateFields, resetFields } = this.props.form
    validateFields(async (errors, values) => {
      if (!errors) {
        await ContactService.sendMail(values)
        resetFields()
        this.setState({ successMessage: 'Thanks, message succefully sent!' })
      } else {
        this.setState({ successMessage: 'Sorry, we could not send your message.' })
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Section isLast="true">
        <Separator number="03" title="Contact Form" />
        <FullContent>
          <Paragraph hasQuotedMarks={false} align="center" padding="0">
            You can send-me a message thought this form. Please let-me know your name and e-mail to
            prepare a cool response.
          </Paragraph>
          <Row bottom="1.3rem">
            <Col2>
              <FormItem label="Name" colon={false}>
                {getFieldDecorator('name', {
                  rules: [
                    {
                      required: true,
                      message: 'Please, you need to fill your name here.',
                      validator: validateName,
                    },
                  ],
                })(<Input />)}
              </FormItem>
            </Col2>
            <Col2>
              <FormItem label="Email" colon={false}>
                {getFieldDecorator('email', {
                  rules: [
                    {
                      required: true,
                      message: 'Please, tell me your e-mail.',
                      validator: validateEmail,
                    },
                  ],
                })(<Input />)}
              </FormItem>
            </Col2>
          </Row>
          <Row bottom="1.3rem">
            <Col1>
              <FormItem label="Message" colon={false}>
                {getFieldDecorator('message', {
                  rules: [
                    {
                      required: true,
                      message: 'Please, fill your message here.',
                      validator: validateMessage,
                    },
                  ],
                })(<TextArea />)}
              </FormItem>
            </Col1>
          </Row>
          <Row bottom="1.3rem" top="2rem">
            {this.state.successMessage && <Paragraph hasQuotedMarks={false} align="center" padding="0">
              {this.state.successMessage}
            </Paragraph>}
            <CenterContent>
              <Button type="orange" onClick={this.sendForm} right="0">
                Send
              </Button>
            </CenterContent>
          </Row>
        </FullContent>
      </Section>
    )
  }
}

const ContactFormWithForm = Form.create()(ContactForm)

export default ContactFormWithForm
