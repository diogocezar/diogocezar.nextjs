import { getFileContent } from "@/helpers/markdown";
import { Page, Wrapper } from "@/components/Containers";
import { EducationalAnimated } from "@/styles/animations";

import SpreadTheWorld from "@/components/Pages/Educational/SpreadTheWorld";
import GitHub from "@/components/Pages/Educational/GitHub";
import Teacher from "@/components/Pages/Educational/Teacher";
import MainLectures from "@/components/Pages/Educational/MainLectures";

import MainEventsParticipations from "@/components/Pages/Educational/MainEventsParticipations";
import MainPappers from "@/components/Pages/Educational/MainPappers";
import Monographies from "@/components/Pages/Educational/Monographies";
import { ButtonBack } from "@/objects/Button";

import FooterMain from "@/components/Pages/Footer";

const Educational = ({ footer }) => {
  return (
    <EducationalAnimated>
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
      {/* <ButtonBack color="orange" /> */}
    </EducationalAnimated>
  );
};

export async function getStaticProps() {
  const footerContent = getFileContent("content/pages/footer.md");
  return {
    props: {
      footer: footerContent,
    },
  };
}

export default Educational;
