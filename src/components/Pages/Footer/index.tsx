import InlineSVG from "svg-inline-react";
import Footer, {
  ColumnFooter,
  TitleFooter,
  ContentFooter,
  ContentImageCenter,
} from "@/components/Footer";
import {
  ListContainerFooter,
  ListItemFooter,
} from "@/components/ListContainer";
import Link from "@/objects/Link";
import {
  iconFooterGithub,
  iconFooterTwitter,
  iconFooterInstagram,
  iconFooterLinkedIn,
} from "@/content/data";
import Image from "next/image";

const FooterMain = ({ isMain = true, content = null }) => {
  const {
    email,
    socialGithub,
    socialTwitter,
    socialInstagram,
    socialLinkedin,
  } = content;
  return (
    <Footer isMain={isMain}>
      <ColumnFooter hideMobile={true}>
        <TitleFooter align="left">Open Source</TitleFooter>
        <ContentFooter align="left">
          This website is open source and you can download{" "}
          <Link
            href="https://github.com/diogocezar/diogocezar.nextjs"
            rel="noopener noreferrer"
            target="_blank"
          >
            right here.
          </Link>
        </ContentFooter>
      </ColumnFooter>
      <ColumnFooter hideMobile={false}>
        <ContentImageCenter>
          <Image
            width={320}
            height={132}
            alt="Logotipo DioGO!"
            src="assets/images/logo/logo.svg"
          />
        </ContentImageCenter>
      </ColumnFooter>
      <ColumnFooter hideMobile={false}>
        <TitleFooter align="right" hideMobile={true}>
          Contact
        </TitleFooter>
        <ContentFooter align="right">
          <ListContainerFooter>
            <ListItemFooter>
              <Link
                href={`${socialGithub}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <InlineSVG src={iconFooterGithub} />
              </Link>
            </ListItemFooter>
            <ListItemFooter>
              <Link
                href={`${socialTwitter}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <InlineSVG src={iconFooterTwitter} />
              </Link>
            </ListItemFooter>
            <ListItemFooter>
              <Link
                href={`${socialInstagram}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <InlineSVG src={iconFooterInstagram} />
              </Link>
            </ListItemFooter>
            <ListItemFooter>
              <Link
                href={`${socialLinkedin}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <InlineSVG src={iconFooterLinkedIn} />
              </Link>
            </ListItemFooter>
          </ListContainerFooter>
        </ContentFooter>
      </ColumnFooter>
    </Footer>
  );
};

export default FooterMain;
