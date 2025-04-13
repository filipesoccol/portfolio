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
        <meta name="description" content="Senior Developer with extensive experience in web and game development. Explore my projects, skills, and awards. Based in Londrina, Parana, Brazil." />
        <meta name="keywords" content="Senior Developer, Web Development, Game Development, React, NextJS, Vue, Vite, Gatsby, Node, Express, MongoDB, PostgreSQL, MySQL, Unity, Pico-8, Phaser, Godot, Blockchain, Solidity, IPFS, Web3, Ethers, Viem, Asana, Jira, Git, Team Management, Project Planning, Brazil."></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Filipe Montanari Soccol - Senior Developer Portfolio" />
        <meta property="og:description" content="Explore the portfolio of a Senior Developer with extensive experience in web and game development." />
        <meta property="og:image" content="/apple-touch-icon.png" />
        <meta property="og:url" content="https://filipe.contact" />
        <meta name="twitter:card" content="apple-touch-icon.png" />
        <meta name="twitter:creator" content="@filipesoccol" />
        <meta name="twitter:title" content="Filipe Montanari Soccol - Senior Developer Portfolio" />
        <meta name="twitter:description" content="Explore the portfolio of a Senior Developer with extensive experience in web and game development." />
        <meta name="twitter:image" content="/apple-touch-icon.png"></meta>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script src="/walkway.min.js" defer />np
      </Head>
      <div className="main-content"><Component {...pageProps} /></div>
      <Footer />
    </main >
  )
}
