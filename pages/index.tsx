import { getFileContent, getFolderContents } from "@/helpers/markdown";

import { Page, Wrapper } from "@/components/Containers";

import { MainAnimated } from "@/styles/animations";

import Introduction from "@/components/Pages/Index/Introduction";
import Content from "@/components/Pages/Index/Content";
import Conclusion from "@/components/Pages/Index/Conclusion";
import FooterMain from "@/components/Pages/Index/Footer";

const Index = ({ index }) => {
  const { title, subTitle, biography, resumeUrl } = index.data;
  return (
    <MainAnimated>
      <Page color="purple" paddingBottom="0">
        <Wrapper>
          <Introduction
            title={title}
            subTitle={subTitle}
            biography={biography}
          />
          <Content />
          <Conclusion />
        </Wrapper>
        <FooterMain isMain={true} />
      </Page>
    </MainAnimated>
  );
};

export async function getStaticProps() {
  const indexContent = getFileContent("content/pages/index.md");
  const postsContent = getFolderContents("content/posts");
  return {
    props: {
      index: indexContent,
      posts: postsContent,
    },
  };
}

export default Index;
