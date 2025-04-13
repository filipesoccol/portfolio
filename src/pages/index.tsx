import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'

import { useEffect, useState } from 'react'
import Highlighter from '@/components/highlighter'
import ExternalLinkIcon from '@/components/externalLinkIcon'
import Icons from '@/components/icons'
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter()
  const [selectedSection, setSelectedSection] = useState<number>(1);
  const [timer, setTimer] = useState<NodeJS.Timeout | undefined>();

  useEffect(() => {
    const t = setInterval(() => {
      setSelectedSection((prev) => ((prev + 1) % 4))
    }, 2000)
    setTimer(t)
    return () => {
      setTimer(undefined)
      clearInterval(t)
    }
  }, [])

  useEffect(() => {
    if (selectedSection == 0) {
      // @ts-ignore
      const svg = new Walkway({
        selector: '#svgImage1',
        duration: 2000,
      })
      svg.draw();
    }
    if (selectedSection == 1) {
      // @ts-ignore
      const svg = new Walkway({
        selector: '#svgImage2',
        duration: 2000,
      });
      svg.draw();
    }
    if (selectedSection == 2) {
      // @ts-ignore
      const svg = new Walkway({
        selector: '#svgImage3',
        duration: 2000,
      });
      svg.draw();
    }
    if (selectedSection == 3) {
      // @ts-ignore
      const svg = new Walkway({
        selector: '#svgImage4',
        duration: 2000,
      });
      svg.draw();
    }
  }, [selectedSection])

  const setSelection = (index: number) => {
    setSelectedSection(index)
    clearInterval(timer)
    setTimer(undefined)
  }

  const goToSelection = (index: number) => {
    const sections = ['skills', 'projects', 'awards']
    const elem = document.getElementById(sections[index])
    console.log(elem?.scrollIntoView({ behavior: 'smooth' }))
  }

  return (
    <>
      <Head>
        <title>Filipe Montanari Soccol - Portfolio</title>
        <link rel="canonical" href="https://filipe.contact"></link>
      </Head>
      <main className={styles.main}>
        <div className={styles.holder}>
          <div className={styles.socialBig}>
            <a className={styles.socialIcons} href="https://github.com/filipesoccol" target='_blank'><Icons name='github' size={24} /></a>
            <a className={styles.socialIcons} href="https://linkedin.com/in/filipesoccol/" target='_blank'><Icons name='linkedin' size={24} /></a>
            <a className={styles.socialIcons} href="https://x.com/filipesoccol" target='_blank'><Icons name='twitter' size={24} /></a>
          </div>
          <h1 className={styles.title}><span>Filipe</span><span>Montanari</span><span>Soccol</span></h1>
          <div className={styles.socialSmall}>
            <a className={styles.socialIcons} href="https://github.com/filipesoccol" target="_blank"><Icons name='github' size={24} /></a>
            <a className={styles.socialIcons} href="https://linkedin.com/in/filipesoccol" target="_blank"><Icons name='linkedin' size={24} /></a>
            <a className={styles.socialIcons} href="https://x.com/filipesoccol" target="_blank"><Icons name='twitter' size={24} /></a>
          </div>
        </div>
        <hr className="m1" />
        <div className={styles.holder2}>
          <div className={styles.bio}>
            <p>Senior Developer with extensive experience in web and game development, creative and excellent team player with a track record of success in high-impact projects and team leadership.</p>
            <button
              className={`${styles.bioItem} ${selectedSection == 0 ? styles.active : ''}`}
              onMouseEnter={() => setSelection(0)}
              onClick={() => goToSelection(0)}
            >
              Skills
            </button>
            <button
              className={`${styles.bioItem} ${selectedSection == 1 ? styles.active : ''}`}
              onMouseEnter={() => setSelection(1)}
              onClick={() => goToSelection(1)}
            >
              Projects
            </button>
            <button
              className={`${styles.bioItem} ${selectedSection == 2 ? styles.active : ''}`}
              onMouseEnter={() => setSelection(2)}
              onClick={() => goToSelection(2)}
            >
              Awards
            </button>
            <button
              onMouseEnter={() => setSelection(3)}
              className={`${styles.bioItem} ${selectedSection == 3 ? styles.active : ''}`}
              onClick={() => router.push('/blog')}
            >
              Blog
            </button>
          </div>
          <div className={`${styles.imageHolder}`}>
            <div className={`${styles.holderEffect} ${selectedSection == 0 ? styles.active : ''}`}>
              <svg id="svgImage1" className={`${styles.foregroundImage} ${selectedSection == 0 ? styles.active : ''}`} width="300px" height="400px" viewBox="0 0 200 300" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'bevel', strokeMiterlimit: 1.5 }}>
                <g transform="scale(2, 1)">
                  <path d="M100,16L17,16L17,177L42,177L42,227L0,227" style={{ fill: "none", stroke: "rgb(254,151,15)", strokeWidth: "33.33px" }} />
                  <path d="M0,237L54,237L54.421,161L29,161L28.584,26L100,26" style={{ fill: "none", stroke: "rgb(244,91,46)", strokeWidth: "33.33px" }} />
                  <path d="M0,257L65.708,257L66.129,142L41.708,142L41.292,46L100,46" style={{ fill: "none", stroke: "rgb(237,29,37)", strokeWidth: "33.33px" }} />
                  <path d="M-0,283.029L83.5,283L83.5,136L57,136L57,66L100,66" style={{ fill: "none", stroke: "rgb(159,32,101)", strokeWidth: "33.33px" }} />
                </g>
              </svg>
            </div>
            <div className={`${styles.holderEffect} ${selectedSection == 1 ? styles.active : ''}`}>
              <svg id="svgImage2" className={`${styles.foregroundImage} ${selectedSection == 1 ? styles.active : ''}`} width="300px" height="400px" viewBox="0 0 200 300" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: 'bevel', strokeMiterlimit: 1.5 }}>
                <g transform="scale(2, 1)">
                  <path d="M17,167.014L83,167.014L83,19.014L17,19.014L17,299.014" style={{ fill: "none", stroke: "rgb(254,151,15)", strokeWidth: "33.33px" }} />
                  <path d="M24,299.014L24,39.014L76,39.014L76,161.014L36,161.014" style={{ fill: "none", stroke: "rgb(244,91,46)", strokeWidth: "33.33px" }} />
                  <path d="M25.791,299.014L25.375,56.014L76,57.014L76,163.014L37,163.014" style={{ fill: "none", stroke: "rgb(237,29,37)", strokeWidth: "33.33px" }} />
                  <path d="M31,299.014L31,74.014L76,74.014L76,150.014L45,150.014" style={{ fill: "none", stroke: "rgb(159,32,101)", strokeWidth: "33.33px" }} />
                </g>
              </svg>
            </div>
            <div className={`${styles.holderEffect} ${selectedSection == 2 ? styles.active : ''}`}>
              <svg id="svgImage3" className={`${styles.foregroundImage} ${selectedSection == 2 ? styles.active : ''}`} width="300px" height="400px" viewBox="0 0 200 300" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: 'bevel', strokeMiterlimit: 1.5 }}>
                <g transform="scale(2, 1)">
                  <path d="M84,300L84,16.029L17,16.029L17,300" style={{ fill: "none", stroke: "rgb(254,151,15)", strokeWidth: "33.33px" }} />
                  <path d="M21.5,300L21.5,34L79.5,34L79.5,187L37,187L80,187.499L80,300" style={{ fill: "none", stroke: "rgb(244,91,46)", strokeWidth: "33.33px" }} />
                  <path d="M22,300L22,58.5L79.625,59.5L80,170L22.325,170L80,170L80.812,300" style={{ fill: "none", stroke: "rgb(237,29,37)", strokeWidth: "33.33px" }} />
                  <path d="M29,300L29,75L75,75L74.5,150L29,150L74.5,150L75,300" style={{ fill: "none", stroke: "rgb(159,32,101)", strokeWidth: "33.33px" }} />
                </g>
              </svg>
            </div>
            <div className={`${styles.holderEffect} ${selectedSection == 3 ? styles.active : ''}`}>
              <svg id="svgImage4" className={`${styles.foregroundImage} ${selectedSection == 3 ? styles.active : ''}`} width="300px" height="400px" viewBox="0 0 200 300" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: 'bevel', strokeMiterlimit: 1.5 }}>
                <g transform="scale(2, 1)">
                  <path d="M35.515,85.178L83.5,85.168L83.5,283.971L16.5,283.971L16.5,0" style={{ fill: "none", stroke: "rgb(254,151,15)", strokeWidth: "33.33px" }} />
                  <path d="M21,0L21,266L79,266L79,113L36.5,113" style={{ fill: "none", stroke: "rgb(244,91,46)", strokeWidth: "33.33px" }} />
                  <path d="M21.5,0L21.5,241.5L79.125,240.5L79.5,130L21.825,130" style={{ fill: "none", stroke: "rgb(237,29,37)", strokeWidth: "33.33px" }} />
                  <path d="M28.5,0L28.5,225L74.5,225L74,150L28.5,150" style={{ fill: "none", stroke: "rgb(159,32,101)", strokeWidth: "33.33px" }} />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div id="skills" className={styles.sectionTitle}>
          <div><h2>Skills</h2></div>
          <div><hr /></div>
        </div>
        <div className={styles.sectionSkills}>
          <div>
            <Highlighter text='Front-end' />
            <ul>
              <li>Frameworks: React, Next, Vue, Vite, Gatsby</li>
              <li>Styles: CSS3, Bootstrap, Tailwind</li>
              <li>Test: Jest, Mocha, Chai</li>
            </ul>
          </div>
          <div>
            <Highlighter text='Back-end' />
            <ul>
              <li>Node, Bun, Express, Typescript</li>
              <li>Databases: MongoDB, PostgreSQL, MySQL</li>
              <li>Third party Services: Google, AWS</li>
            </ul>
          </div>
          <div>
            <Highlighter text='Team Management' />
            <ul>
              <li>Project Planning</li>
              <li>Team management: Asana, Jira, Git</li>
              <li>Quick learner of new development tools and methods</li>
            </ul>
          </div>
          <div>
            <Highlighter text='Game and Visual Development' />
            <ul>
              <li>Game Engines: Unity, Pico-8, Phaser, Godot</li>
              <li>Visual Libraries: ThreeJS, Canvas, D3, CreateJS</li>
            </ul>
          </div>
          <div>
            <Highlighter text='Blockchain' />
            <ul>
              <li>Providers: Web3, Ethers, Viem</li>
              <li>Smart-Contract: Solidity, Hardhat</li>
              <li>Third Party Integration: Connectors, IPFS, LibP2P, Alchemy, Infura</li>
            </ul>
          </div>
        </div>
        <div id="projects" className={styles.sectionTitle}>
          <div><h2>Projects</h2></div>
          <div><hr /></div>
        </div>
        <div className={styles.sectionProjects}>
          <div className={styles.project}>
            <div className={`${styles.projectImage} ${styles.spacer}`}>
              <Image src='/projects/otoco_48.png' alt='otoco.io' width={300} height={300} />
            </div>
            <div className={styles.projectDescription}>
              {/* <div><a href="https://otoco.io" target='_blank'><Image src='/projects/otoco_icon2.png' alt='otoco.io' width={64} height={64} /></a></div> */}
              <p><a href="https://otoco.io" target='_blank'>otoco.io<ExternalLinkIcon /></a></p>
              <p>As the lead developer of this dynamic project, I spearheaded the development of a versatile platform designed to streamline the creation of Limited Liability Companies (LLCs) in three key jurisdictions: Delaware, Wyoming, and Switzerland. My responsibilities spanned from conceiving the project's architecture to implementing every facet of its functionality, encompassing frontend and backend development, as well as the creation of intelligent smart contracts. One noteworthy achievement in this venture was the development of a meticulously designed Initial Coin Offering (ICO) smart contract that proved instrumental in securing a substantial 1.2 million USD in funding.</p>
              <p>Tech Stack:</p>
              <p>React・NextJS・Booststrap・Vercel・Ethers・Safe-SDK・Web3Onboard・Alchemy・IPFS・NodeJS・Express・Hardhat・Solidity</p>
            </div>
            <div className={styles.spacer}></div>
          </div>
          <div className={`${styles.project} ${styles.inverse}`}>
            <div className={`${styles.projectImage} ${styles.spacer} ${styles.inverse}`}><Image src='/projects/fruit_48.png' alt='fruit.dance logo' width={300} height={300} /></div>
            <div className={styles.projectDescription}>
              {/* <div><a href="https://fruit.dance" target='_blank'><Image src='/projects/fruit_icon.png' alt='fruit.dance screenshot' width={64} height={64} /></a></div> */}
              <p><a href="https://fruit.dance" target='_blank'>fruit.dance<ExternalLinkIcon /></a></p>
              <p>Solo project for showcase expertise. The game's animations and interactions rely solely on React and CSS, and it features a NextJS backend API for storing best scores. What makes it stand out is the innovative score verification system, calculated on the backend based on the game seed. This project showcases the potential of NextJS and Google Firestore to deliver a seamless gaming experience, combining frontend elegance with backend efficiency, while introducing a unique scoring mechanism for added depth and competitiveness.</p>
              <p>Tech Stack:</p>
              <p>React・NextJS・Google Firestore・Vercel</p>
            </div>
            <div className={styles.spacer}></div>
          </div>
          <div className={styles.project}>
            <div className={`${styles.projectImage} ${styles.spacer}`}><Image src='/projects/ipfs_48.png' alt='ipfs components logo' width={300} height={300} /></div>
            <div className={styles.projectDescription}>
              {/* <div><a href="https://github.com/filipesoccol/react-ipfs-components" target='_blank'><Image src='/projects/ipfs_icon.png' alt='otoco.io' width={64} height={64} /></a></div> */}
              <p><a href="https://filipesoccol.github.io/vue-ipfs-components-demo/" target='_blank'>IPFS Vue Components<ExternalLinkIcon /></a></p>
              <p><a href="https://filipesoccol.github.io/react-ipfs-components-demo/" target='_blank'>IPFS React Components<ExternalLinkIcon /></a></p>
              <p>In this solo project, the goal was to unify the IPFS ecosystem by automating gateway connections and content retrieval. Many existing projects depend on a single gateway, which can pose challenges during outages. With this library, users can effortlessly access IPFS content without the need to manually integrate APIs or select gateways, enhancing the reliability and convenience of the user experience.</p>
              <p>Tech Stack:</p>
              <p>Typescript・NPM・IPFS・Vue・React</p>
            </div>
            <div className={styles.spacer}></div>
          </div>
        </div>
        <div id="awards" className={styles.sectionTitle}>
          <div><h2>Awards</h2></div>
          <div><hr /></div>
        </div>
        <div className={styles.sectionAwards}>
          <div className={styles.award}>
            <Highlighter text='IPFS Microgrants' />
            <p>Filecoin Grants Program</p>
          </div>
          <div className={styles.awardDescription}>
            <div>NOVEMBER 2022</div>
            <div>Earned a Micro Grant to develop Vue and React open source components to support IPFS fetch data from multiple gateways.</div>
            <ul>
              <li><a href="https://github.com/filipesoccol/ipfs-public-fetcher" target='_blank'>IPFS Fetcher Repo<ExternalLinkIcon /></a></li>
              <li><a href="https://github.com/filipesoccol/vue-ipfs-components" target='_blank'>Vue IPFS Components Repo<ExternalLinkIcon /></a></li>
              <li><a href="https://github.com/filipesoccol/react-ipfs-components" target='_blank'>React IPFS Components Repo<ExternalLinkIcon /></a></li>
            </ul>
          </div>
          <div className={styles.award}>
            <Highlighter text='Polygon and Filecoin Award' />
            <p>Ethereum São Paulo 2022</p>
          </div>
          <div className={styles.awardDescription}>
            <div>OCTOBER 2022</div>
            <div>Earned a prize with the Doiim team project Web3RP. Get a real helper to streamline your business of any size or kind as fast as a couple of clicks.</div>
            <ul>
              <li><a href="https://github.com/doiim/web3RP" target='_blank'>Web3RP Repo<ExternalLinkIcon /></a></li>
            </ul>
          </div>
          <div className={styles.award}>
            <Highlighter text='Superfluid Award' />
            <p>ETHGlobal 2021</p>
          </div>
          <div className={styles.awardDescription}>
            <div>OCTOBER 2021</div>
            <div>Earned a prize as a solo developer with project Fluid Miners. A Superfluid gamified coin offering, bonus distribution, using DAI as energy resource.</div>
            <ul>
              <li><a href="https://ethglobal.com/showcase/fluid-miners-0m6nt" target='_blank'>Fluid Miners Pitch<ExternalLinkIcon /></a></li>
              <li><a href="https://github.com/doiim/fluid-miners" target='_blank'>Fluid Miners Repo<ExternalLinkIcon /></a></li>
            </ul>
          </div>
          <div className={styles.award}>
            <Highlighter text='Ripio Award' />
            <p>ETH Buenos Aires 2018</p>
          </div>
          <div className={styles.awardDescription}>
            <div>MAY 2018</div>
            <div>Earned a prize with the Doiim team project BId, legally binding blockchain identity.</div>
            <ul>
              <li><a href="https://github.com/ETHBuenosAires-Doiim/bID" target='_blank'>bID Repo<ExternalLinkIcon /></a></li>
            </ul>
          </div>
        </div>
      </main >
    </>
  )
}