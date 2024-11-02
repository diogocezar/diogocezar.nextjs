import { createGlobalStyle } from "styled-components";

const Settings = createGlobalStyle`
  :root {
    --color-black: #2b243c;
    --color-white: #f2f2f2;
    --color-white-pure: #fff;
    --color-gray: #999999;
    --color-purple-darker: #241b3a;
    --color-purple-dark: #160830;
    --color-purple-dark-alternative: #220d49;
    --color-purple-light: #220d49;
    --color-purple: #160830;
    --color-orange: #e901a4;
    --color-orange-dark: #c00e8b;

    --size-s1: 15px;
    --size-s2: 20px;
    --size-s3: 40px;
    --size-s4: 60px;
    --size-s5: 80px;
    --size-s6: 150px;
    --size-s7: 240px;
  }
`;

export default Settings;
