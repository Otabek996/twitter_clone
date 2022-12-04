import type { AppProps } from 'next/app'
import '../styles/global.scss'
import Navbar from '../components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Navbar/>
    <Component {...pageProps} />
  </>
}
