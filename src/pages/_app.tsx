import '@/styles/globals.scss'
import { Quicksand } from 'next/font/google'
import type { AppProps } from 'next/app'

// If loading a variable font, you don't need to specify the font weight
const quicksand = Quicksand({ weight: ['300', '400'], subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={quicksand.className}>
      <Component {...pageProps} />
    </main>
  )
}
