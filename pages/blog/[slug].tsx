import { getFileContent } from "@/helpers/markdown";
import { Page, Wrapper } from "@/components/Containers";
import Details from "@/components/Pages/Blog/Details";
import { ButtonBack } from "@/objects/Button";
import FooterMain from "@/components/Footer";
import { useRouter } from "next/router";

const BlogSlug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Page color="purple-dark">
        <Wrapper>
          <Details slug={slug}></Details>
        </Wrapper>
      </Page>
      {/* <ButtonBack color="orange" /> */}
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

export default BlogSlug;
