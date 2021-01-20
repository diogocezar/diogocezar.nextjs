import React, { Component } from 'react'
import StyledAnimationContainer from './styles'

class AnimationContainer extends Component {
  componentWillUpdate() {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  }

  componentDidUpdate(prevProps) {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  }

  render() {
    return <StyledAnimationContainer>{this.props.children}</StyledAnimationContainer>
  }
}

export default AnimationContainer
