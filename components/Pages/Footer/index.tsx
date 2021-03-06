import InlineSVG from "svg-inline-react";
import Footer, {
  ColumnFooter,
  TitleFooter,
  ContentFooter,
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
  iconFooterFacebook,
  iconFooterLinkedIn,
} from "@/content/data";

const FooterMain = ({ isMain = true, content = null }) => {
  const {
    email,
    phone,
    socialGithub,
    socialTwitter,
    socialInstagram,
    socialFacebook,
    socialLinkedin,
  } = content;
  return (
    <Footer isMain={isMain}>
      <ColumnFooter>
        <TitleFooter align="left">SOURCE CODE</TitleFooter>
        <ContentFooter align="left">
          This website is open source and you can download{" "}
          <Link
            href="https://github.com/diogocezar/diogocezar.nextjs"
            target="_blank"
          >
            right here.
          </Link>
        </ContentFooter>
      </ColumnFooter>
      <ColumnFooter>
        <TitleFooter>CONTACT</TitleFooter>
        <ContentFooter>
          You can contact me through{" "}
          <Link href={`mailto:${email}`}>{email}</Link>
          <br />
          {phone}
        </ContentFooter>
      </ColumnFooter>
      <ColumnFooter>
        <TitleFooter align="right">SOCIAL NETWORKS</TitleFooter>
        <ContentFooter align="right">
          <ListContainerFooter>
            <ListItemFooter>
              <Link href={`mailto:${socialGithub}`} target="_blank">
                <InlineSVG src={iconFooterGithub} />
              </Link>
            </ListItemFooter>
            <ListItemFooter>
              <Link href={`mailto:${socialTwitter}`} target="_blank">
                <InlineSVG src={iconFooterTwitter} />
              </Link>
            </ListItemFooter>
            <ListItemFooter>
              <Link href={`mailto:${socialInstagram}`} target="_blank">
                <InlineSVG src={iconFooterInstagram} />
              </Link>
            </ListItemFooter>
            <ListItemFooter>
              <Link href={`mailto:${socialFacebook}`} target="_blank">
                <InlineSVG src={iconFooterFacebook} />
              </Link>
            </ListItemFooter>
            <ListItemFooter>
              <Link href={`mailto:${socialLinkedin}`} target="_blank">
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
