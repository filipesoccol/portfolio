import '@/styles/globals.scss'
import { Zen_Antique, Space_Mono } from 'next/font/google'
import type { AppProps } from 'next/app'
import { Html } from 'next/document'

// If loading a variable font, you don't need to specify the font weight
const zen = Zen_Antique({ weight: ['400'], subsets: ['latin'], variable: '--zen-font' })
const space = Space_Mono({ weight: ['400'], subsets: ['latin'], variable: '--space-font' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${zen.variable} ${space.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
