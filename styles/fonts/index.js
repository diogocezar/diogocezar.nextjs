import { createGlobalStyle } from 'styled-components'

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'AkzidenzGroteskBE';
    src: url('/assets/fonts/AkzidenzGroteskBE-Regular.eot?#iefix') format('embedded-opentype'),
         url('/assets/fonts/AkzidenzGroteskBE-Regular.otf')  format('opentype'),
         url('/assets/fonts/AkzidenzGroteskBE-Regular.woff') format('woff'),
         url('/assets/fonts/AkzidenzGroteskBE-Regular.ttf')  format('truetype'),
         url('/assets/fonts/AkzidenzGroteskBE-Regular.svg#AkzidenzGroteskBE-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'AkzidenzGroteskBE';
    src: url('/assets/fonts/AkzidenzGroteskBE-Bold.eot?#iefix') format('embedded-opentype'),
         url('/assets/fonts/AkzidenzGroteskBE-Bold.otf')  format('opentype'),
         url('/assets/fonts/AkzidenzGroteskBE-Bold.woff') format('woff'),
         url('/assets/fonts/AkzidenzGroteskBE-Bold.ttf')  format('truetype'),
         url('/assets/fonts/AkzidenzGroteskBE-Bold.svg#AkzidenzGroteskBE-Bold') format('svg');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'AGaramondPro';
    src: url('/assets/fonts/AGaramondPro-Regular.eot?#iefix') format('embedded-opentype'),
         url('/assets/fonts/AGaramondPro-Regular.otf')  format('opentype'),
         url('/assets/fonts/AGaramondPro-Regular.woff') format('woff'),
         url('/assets/fonts/AGaramondPro-Regular.ttf')  format('truetype'),
         url('/assets/fonts/AGaramondPro-Regular.svg#AGaramondPro-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'AGaramondPro';
    src: url('/assets/fonts/AGaramondPro-Italic.eot?#iefix') format('embedded-opentype'),
         url('/assets/fonts/AGaramondPro-Italic.otf')  format('opentype'),
         url('/assets/fonts/AGaramondPro-Italic.woff') format('woff'),
         url('/assets/fonts/AGaramondPro-Italic.ttf')  format('truetype'),
         url('/assets/fonts/AGaramondPro-Italic.svg#AGaramondPro-Italic') format('svg');
    font-weight: normal;
    font-style: italic;
  }
`

export default Fonts
