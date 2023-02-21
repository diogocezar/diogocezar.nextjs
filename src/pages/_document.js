import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="canonical" href="https://diogocezar.dev"/>
          <link rel="shortcut icon" href="https://diogocezar.dev/assets/images/icons/icon-72x72.png"/>
          <link rel="manifest" href="/manifest.json"/>
          <meta name="description" content="I’m just a guy that knows that knows nothing. And it’s exactly what makes me moving on. As teacher, talker, developer and technology enthusiastic, I am always searching for new challenges."/>
          <meta property="og:locale" content="pt_BR"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="Diogo Cezar - Portfolio"/>
          <meta property="og:description" content="I’m just a guy that knows that knows nothing. And it’s exactly what makes me moving on. As teacher, talker, developer and technology enthusiastic, I am always searching for new challenges."/>
          <meta property="og:url" content="https://www.diogocezar.dev"/>
          <meta property="og:site_name" content="Diogo Cezar"/>
          <meta property="og:image" content="https://diogocezar.dev/assets/images/og/og.jpg"/>
          <meta property="og:image:secure_url" content="https://diogocezar.dev/assets/images/og/og.jpg"/>
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="630"/>
          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:description" content="I’m just a guy that knows that knows nothing. And it’s exactly what makes me moving on. As teacher, talker, developer and technology enthusiastic, I am always searching for new challenges."/>
          <meta name="twitter:title" content="Diogo Cezar - Portfolio"/>
          <meta name="twitter:site" content="@diogocezar"/>
          <meta name="twitter:image" content="/assets/images/og/og.jpg"/>
          <meta name="twitter:creator" content="@diogocezar"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
