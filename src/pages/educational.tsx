import { getFileContent } from "@/helpers/markdown";
import { Page, Wrapper } from "@/components/Containers";
import SpreadTheWorld from "@/components/Pages/Educational/SpreadTheWorld";
import GitHub from "@/components/Pages/Educational/GitHub";
import Teacher from "@/components/Pages/Educational/Teacher";
import MainLectures from "@/components/Pages/Educational/MainLectures";

import MainEventsParticipations from "@/components/Pages/Educational/MainEventsParticipations";
import MainPappers from "@/components/Pages/Educational/MainPappers";
import Monographies from "@/components/Pages/Educational/Monographies";

import FooterMain from "@/components/Pages/Footer";

const Educational = ({ footer }) => {
  return (
    <>
      <Page color="orange">
        <Wrapper>
          <SpreadTheWorld />
          <GitHub />
          <Teacher />
          <MainLectures />
        </Wrapper>
      </Page>
      <Page color="purple" decoration={true} decorationColor="purple">
        <Wrapper>
          <MainEventsParticipations />
          <MainPappers />
          <Monographies />
        </Wrapper>
      </Page>
      <FooterMain content={footer} />
    </>
  );
};

export async function getStaticProps() {
  const footerContent = getFileContent("src/content/pages/footer.md");
  return {
    props: {
      footer: footerContent.data,
    },
  };
}

export default Educational;
