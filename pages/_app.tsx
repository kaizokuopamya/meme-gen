import Header from '@/components/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <section className="bg-yellow w-screen h-screen font-mon overflow-x-hidden dark:bg-dark">
      <Header />
      <Component {...pageProps} />
    </section>
  )
}
