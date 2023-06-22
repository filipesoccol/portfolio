import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'

interface Props {
  imagePath: string
}

export default function Home({ imagePath }: Props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={imagePath} />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <div className={styles.holder}>

            <div className={styles.logoHolder} style={{ backgroundImage: `url(${imagePath})` }}>
            </div>
            <div className={styles.logoHolder} style={{ backgroundImage: `url(${imagePath})` }}>
            </div>
            <Image
              src="/logo.png"
              alt="Portfolio Logo"
              width={100}
              height={100}
              priority
            />
          </div>
        </div>
        <ul>

          <li>Full-stack development (Node.js + Typescript, React, Vue, CSS, etc.)</li>
          <li>Smart Contract development (Solidity)</li>
          <li>Web3 tools integration</li>
          <li>Game and simulator development (Unity3D, C++)</li>
          <li>Team management</li>
          <li>Quick learner of new development tools and methods</li>
        </ul>
      </main>
    </>
  )
}

function generateColors(numColors: number) {
  const colors = [];

  for (let i = 0; i < numColors; i++) {
    const hue = i / numColors;
    const saturation = 0.5;
    const lightness = 0.6;
    const rgb = hslToRGB(hue, saturation, lightness);
    const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
    colors.push(hex);
  }

  return colors;
}

function hslToRGB(h: number, s: number, l: number) {
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function rgbToHex(r: number, g: number, b: number) {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}


// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  // data:image/svg+xml;base64,${data}

  const size = 200
  const squareSize = size / 8;
  let svgString = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200">`;

  const colors = generateColors(16);

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const rect = `<rect
        x="${j * squareSize}" 
        y="${i * squareSize}"
        width="${squareSize}"
        height="${squareSize}"
        fill="${colors[parseInt((Math.random() * 16).toString())]}"
        /> `;
      svgString += rect;
    }
  }

  svgString += "</svg>"
  const base64String = Buffer.from(svgString).toString('base64');
  // Pass data to the page via props
  return { props: { imagePath: `data:image/svg+xml;base64,${base64String}` } }
}