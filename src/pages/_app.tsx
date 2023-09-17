import '@/styles/globals.scss'
import { Zen_Antique, Space_Mono } from 'next/font/google'
import type { AppProps } from 'next/app'
import { Canvas } from '@react-three/fiber'
import Star from '../components/starfield'

// If loading a variable font, you don't need to specify the font weight
const zen = Zen_Antique({ weight: ['400'], subsets: ['latin'], variable: '--zen-font' })
const space = Space_Mono({ weight: ['400'], subsets: ['latin'], variable: '--space-font' })

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
    <main className={`${zen.variable} ${space.variable}`}>
      <div className="canvasHolder">
        <Canvas>
          <ambientLight intensity={10} />
          <CreateStarfield />
        </Canvas>
      </div>
      <Component {...pageProps} />
    </main >
  )
}
