import { getFileContent } from "@/helpers/markdown";
import { Page, Wrapper } from "@/components/Containers";

import Introduction from "@/components/Pages/Index/Introduction";
import Conclusion from "@/components/Pages/Index/Conclusion";
import FooterMain from "@/components/Pages/Footer";

const Index = ({ index, footer, home }) => {
  const { title, subtitle, biography, citation, citationAuthor } = index.data;
  return (
    <Page color="purple" paddingBottom="0">
      <Wrapper>
        <Introduction title={title} subtitle={subtitle} biography={biography} />
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
