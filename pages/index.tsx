import { getFileContent } from "@/helpers/markdown";
import { Page, Wrapper } from "@/components/Containers";
import { MainAnimated } from "@/styles/animations";

import Introduction from "@/components/Pages/Index/Introduction";
import Content from "@/components/Pages/Index/Content";
import Conclusion from "@/components/Pages/Index/Conclusion";
import FooterMain from "@/components/Pages/Footer";

const Index = ({ index, footer }) => {
  const { title, subtitle, biography, citation, citationAuthor } = index.data;
  return (
    <MainAnimated>
      <Page color="purple" paddingBottom="0">
        <Wrapper>
          <Introduction
            title={title}
            subtitle={subtitle}
            biography={biography}
          />
          <Content />
          <Conclusion citation={citation} citationAuthor={citationAuthor} />
        </Wrapper>
        <FooterMain isMain={true} content={footer.data} />
      </Page>
    </MainAnimated>
  );
};

export async function getStaticProps() {
  const indexContent = getFileContent("content/pages/index.md");
  const footerContent = getFileContent("content/pages/footer.md");
  return {
    props: {
      index: indexContent,
      footer: footerContent,
    },
  };
}

export default Index;
