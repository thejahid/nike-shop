import type { AppProps } from 'next/app'

// Tailwind css
import 'styles/tailwind.css'

import { Layout } from 'components'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
