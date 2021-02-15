import { getFileContent } from "@/helpers/markdown";
import { Page, Wrapper } from "@/components/Containers";
import Posts from "@/components/Pages/Blog/Posts";
import FooterMain from "@/components/Footer";
import BlogService from "@/services/BlogService";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const footerContent = getFileContent("content/pages/footer.md");
  const page = context.params.page;
  const { posts } = await BlogService.getPosts(page);
  return {
    props: {
      footer: footerContent.data,
      posts,
    },
  };
}

const BlogPage = ({ footer, posts }) => {
  return (
    <>
      <Page color="purple-dark">
        <Wrapper>
          <Posts posts={posts}></Posts>
        </Wrapper>
      </Page>
      <FooterMain content={footer} />
    </>
  );
};

export default BlogPage;
