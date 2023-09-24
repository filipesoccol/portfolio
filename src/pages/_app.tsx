import '@/styles/globals.scss'
import { Roboto_Slab } from 'next/font/google'
import type { AppProps } from 'next/app'
import { Canvas } from '@react-three/fiber'
import Star from '../components/star'
import Meteorite from '@/components/meteorite'

import localFont from 'next/font/local'
const futura = localFont({
  src: '../fonts/futura.ttf',
  variable: '--futura-font'
})
const roboto = Roboto_Slab({ weight: ['300'], subsets: ['latin'], variable: '--roboto-font' })

export default function App({ Component, pageProps }: AppProps) {

  const CreateStarfield = () => {
    return new Array(1000).fill(1).map((val, idx) => {
      return <Star position={[
        Math.random() * 1000 - 500,
        Math.random() * 1000 - 500,
        -idx,
      ]} />
    })
  }

  return (
    <main className={`${futura.variable} ${roboto.variable}`}>
      <div className="canvasHolder">
        <Canvas>
          <CreateStarfield />
          <Meteorite position={[0, 0, -100]} />
        </Canvas>
      </div>
      <Component {...pageProps} />
    </main >
  )
}
