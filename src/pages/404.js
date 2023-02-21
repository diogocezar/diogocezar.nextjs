import React, { Component } from 'react'

import { Page, Wrapper } from '@/components/Containers'

import Message from '@/components/Pages/404'

class Main extends Component {
  render() {
    return (
        <Page>
          <Wrapper>
            <Message />
          </Wrapper>
        </Page>
    )
  }
}

export default Main
