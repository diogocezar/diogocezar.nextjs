import { getFileContent } from "@/helpers/markdown";
import { Page, Wrapper } from "@/components/Containers";
import Posts from "@/components/Pages/Blog/Posts";
import { useRouter } from "next/router";
import FooterMain from "@/components/Footer";

const BlogPage = ({ footer }) => {
  const router = useRouter();
  const { page } = router.query;
  return (
    <>
      <Page color="purple-dark">
        <Wrapper>
          <Posts page={page}></Posts>
        </Wrapper>
      </Page>
      {/* <FooterMain content={footer} /> */}
    </>
  );
};

// export async function getStaticProps() {
//   const footerContent = getFileContent("content/pages/footer.md");
//   return {
//     props: {
//       footer: footerContent.data,
//     },
//   };
// }

export default BlogPage;
