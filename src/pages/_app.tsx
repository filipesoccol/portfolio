import '@/styles/globals.scss'
import { useRouter } from 'next/router'
import { Roboto_Slab } from 'next/font/google'
import type { AppProps } from 'next/app'
import { Canvas } from '@react-three/fiber'
import Star from '../components/star'
import Meteorite from '@/components/meteorite'
import localFont from 'next/font/local'
import { useEffect, useMemo, useState } from 'react'
import '@/styles/globals.scss'

const futura = localFont({
  src: '../fonts/futura.ttf',
  variable: '--futura-font'
})
const roboto = Roboto_Slab({ weight: ['200', '300', '500', '700'], subsets: ['latin'], variable: '--roboto-font' })

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()
  const [isBlog, setIsBlog] = useState(false)

  useEffect(() => {
    setIsBlog(router.route.includes('/blog'))
  }, [router.route])

  const CreateStarfield = useMemo(() => {
    return new Array(1000).fill(1).map((val, idx) => {
      return (
        <Star
          key={idx}
          position={[
            Math.random() * 1000 - 500,
            Math.random() * 1000 - 500,
            -idx,
          ]}
          speed={isBlog ? 0 : 10 + Math.random() * 20}
        />
      )
    })
  }, [isBlog])

  return (
    <main className={`${futura.variable} ${roboto.variable}`}>
      {!isBlog && <div className="canvasHolder">
        <Canvas>
          {CreateStarfield}
          <Meteorite position={[200, 0, -100]} />
        </Canvas>
      </div>}
      {/* <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.2 }}
        > */}
      <Component {...pageProps} />
      {/* </motion.div>
      </AnimatePresence> */}
    </main >
  )
}
