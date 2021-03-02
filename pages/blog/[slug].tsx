import { getFileContent } from "@/helpers/markdown";
import { Page, Wrapper } from "@/components/Containers";
import Details from "@/components/Pages/Blog/Details";
import FooterMain from "@/components/Pages/Footer";
import BlogService from "@/services/BlogService";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const footerContent = getFileContent("content/pages/footer.md");
  const slug = context.params.slug;
  const { posts: post } = await BlogService.getPost(slug);
  return {
    props: {
      footer: footerContent.data,
      post,
    },
  };
}

const BlogSlug = ({ footer, post }) => {
  return (
    <>
      <Page color="purple-dark">
        <Wrapper>
          <Details post={post}></Details>
        </Wrapper>
      </Page>
      <FooterMain content={footer} />
    </>
  );
};

export default BlogSlug;
