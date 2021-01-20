import Settings from '@/styles/settings'
import Generic from '@/styles/generic'
import Base from '@/styles/base'
import Fonts from '@/styles/fonts'

import 'antd/dist/antd.css'

export default function MyApp({ Component, pageProps }) {
  return (
  <>
    <Settings />
    <Fonts />
    <Generic />
    <Base />
    <Component {...pageProps} />
  </>
  )
}
