import { Page, Wrapper } from "@/components/Containers";

import Introduction from "@/components/Pages/Index/Introduction";
import Content from "@/components/Pages/Index/Content";
import FooterMain from "@/components/Pages/Footer";

const Index = () => {
  return (
    <Page color="purple" paddingBottom="0">
      <Wrapper>
        <Introduction />
        <Content />
      </Wrapper>
      <FooterMain isMain={true} />
    </Page>
  );
};

export default Index;
