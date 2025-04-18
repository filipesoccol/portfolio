import { Roboto_Slab, Tomorrow } from 'next/font/google'
import type { AppProps } from 'next/app'
import Footer from '@/components/footer'

import '@/styles/globals.scss'
import Head from 'next/head'

const tomorrow = Tomorrow({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--futura-font'
})

const roboto = Roboto_Slab({
  weight: ['200', '300', '500', '700'],
  subsets: ['latin'],
  variable: '--roboto-font'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${tomorrow.variable} ${roboto.variable}`}>
      <Head>
        <meta key="description" name="description" content="Senior Developer with extensive experience in web and game development. Explore my projects, skills, and awards. Based in Londrina, Parana, Brazil." />
        <meta key="keywords" name="keywords" content="Senior Developer, Web Development, Game Development, React, NextJS, Vue, Vite, Gatsby, Node, Express, MongoDB, PostgreSQL, MySQL, Unity, Pico-8, Phaser, Godot, Blockchain, Solidity, IPFS, Web3, Ethers, Viem, Asana, Jira, Git, Team Management, Project Planning, Brazil." />
        <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
        <meta key="og:title" property="og:title" content="Filipe Montanari Soccol - Senior Developer Portfolio" />
        <meta key="og:description" property="og:description" content="Explore the portfolio of a Senior Developer with extensive experience in web and game development." />
        <meta key="og:image" property="og:image" content="/apple-touch-icon.png" />
        <meta key="og:url" property="og:url" content="https://filipe.contact" />
        <meta key="twitter:card" name="twitter:card" content="apple-touch-icon.png" />
        <meta key="twitter:creator" name="twitter:creator" content="@filipesoccol" />
        <meta key="twitter:title" name="twitter:title" content="Filipe Montanari Soccol - Senior Developer Portfolio" />
        <meta key="twitter:description" name="twitter:description" content="Explore the portfolio of a Senior Developer with extensive experience in web and game development." />
        <meta key="twitter:image" name="twitter:image" content="/apple-touch-icon.png" />
        <link key="apple-touch-icon" rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link key="manifest" rel="manifest" href="/site.webmanifest" />
        <link key="favicon" rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link key="icon-96" rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <script key="walkway" src="/walkway.min.js" defer />
      </Head>
      <div className="main-content"><Component {...pageProps} /></div>
      <Footer />
    </main >
  )
}
