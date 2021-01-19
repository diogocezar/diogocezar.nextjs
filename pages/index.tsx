import { Title } from "@/styles/pages/index/styles";
import { getFileContent, getFolderContents } from "@/helpers/markdown";

const Index = ({ index }) => {
  const { title } = index.data;
  return <Title>{title}</Title>;
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
