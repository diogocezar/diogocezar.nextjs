import React, { Component } from "react";

import { Page, Wrapper } from "@/components/Containers";
import FooterMain from "@/components/Pages/Footer";

import Message from "@/components/Pages/404";

class Main extends Component {
  render() {
    return (
      <Page color="purple" paddingBottom="0">
        <Wrapper>
          <Message />
        </Wrapper>
        <FooterMain isMain={true} />
      </Page>
    );
  }
}

export default Main;
