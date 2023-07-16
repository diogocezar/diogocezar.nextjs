import { getFileContent } from "@/helpers/markdown";
import { Page, Wrapper } from "@/components/Containers";

import Introduction from "@/components/Pages/Index/Introduction";
import Content from "@/components/Pages/Index/Content";
import Conclusion from "@/components/Pages/Index/Conclusion";
import FooterMain from "@/components/Pages/Footer";

import Script from "next/script";

const Index = ({ index, footer, home }) => {
  const { title, subtitle, biography, citation, citationAuthor } = index.data;
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
        <Introduction title={title} subtitle={subtitle} biography={biography} />
        <Content />
        <Conclusion citation={citation} citationAuthor={citationAuthor} />
      </Wrapper>
      <FooterMain isMain={true} content={footer} />
    </Page>
  );
};

export async function getStaticProps() {
  const indexContent = getFileContent("src/content/pages/index.md");
  const footerContent = getFileContent("src/content/pages/footer.md");
  return {
    props: {
      index: indexContent,
      footer: footerContent.data,
    },
  };
}

export default Index;
