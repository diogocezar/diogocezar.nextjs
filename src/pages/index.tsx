import { Page, Wrapper } from "@/components/Containers";

import Introduction from "@/components/Pages/Index/Introduction";
import Content from "@/components/Pages/Index/Content";
import FooterMain from "@/components/Pages/Footer";

import Script from "next/script";

const Index = () => {
  return (
    <Page color="purple" paddingBottom="0">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-DQS0HM726E" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-DQS0HM726E');
        `}
      </Script>
      <Wrapper>
        <Introduction />
        <Content />
      </Wrapper>
      <FooterMain isMain={true} />
    </Page>
  );
};

export default Index;
