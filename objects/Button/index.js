import React, { Component } from 'react'
import { Link as LinkRoute } from 'next/link'
import debounce from 'lodash/debounce'
import InlineSVG from 'svg-inline-react'
import {
  StyledButton,
  StyledButtonList,
  StyledButtonBack,
  StyledButtonBackContainer,
} from './styles'
import {
  arrow,
} from '@/content/data'

const Button = props => <StyledButton {...props}>{props.children}</StyledButton>

const ButtonList = props => <StyledButtonList {...props}>{props.children}</StyledButtonList>

class ButtonBack extends Component {
  state = {
    display: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', debounce(this.handleScroll, 100))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', debounce(this.handleScroll, 100))
  }

  handleScroll = () => {
    this.setState({
      display: window.scrollY > 600,
    })
  }

  render() {
    return (
      <LinkRoute to="/">
        <StyledButtonBackContainer className={`display-${this.state.display}`} color={this.props.color}>
            <StyledButtonBack>
              <InlineSVG src={arrow} />
            </StyledButtonBack>
        </StyledButtonBackContainer>
      </LinkRoute>
    )
  }
}

export default Button
export { ButtonList, ButtonBack }
