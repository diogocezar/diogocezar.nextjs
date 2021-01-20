import { createGlobalStyle } from 'styled-components'

const Settings = createGlobalStyle`
  :root {
    --color-black: #2b243c;
    --color-white: #f2f2f2;
    --color-white-pure: #fff;
    --color-gray: #999999;
    --color-purple-dark: #312450;
    --color-purple-darker: #241b3a;
    --color-purple-light: #5E42A6;
    --color-purple: #493382;
    --color-orange: #D8473A;
    --color-orange-dark: #A82115;

    --size-s1: 15px;
    --size-s2: 20px;
    --size-s3: 40px;
    --size-s4: 60px;
    --size-s5: 80px;
    --size-s6: 150px;
    --size-s7: 240px;
  }
`

export default Settings
