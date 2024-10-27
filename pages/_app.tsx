import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
const siteTitle = 'Quiz'
const QuizApp = ({ Component, pageProps }: AppProps) => (
  <div>
    <Head>
      <title>{siteTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <Component {...pageProps} />
  </div>
)

export default QuizApp
