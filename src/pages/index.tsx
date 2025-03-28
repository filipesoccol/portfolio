import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'

import awards from '@/public/header/awards.png'
import projects from '@/public/header/projects.png'
import skills from '@/public/header/skills.png'
import { useEffect, useState } from 'react'
import Highlighter from '@/components/highlighter'
import ExternalLinkIcon from '@/components/externalLinkIcon'
import Link from 'next/link'
import Icons from '@/components/icons'
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter()
  const [selectedSection, setSelectedSection] = useState<number>(1);
  const [timer, setTimer] = useState<NodeJS.Timer | undefined>();

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedSection((prev) => ((prev + 1) % 3) + 1)
    }, 2000)
    setTimer(timer)
    return () => {
      setTimer(undefined)
      clearInterval(timer)
    }
  }, [])

  const setSelection = (index: number) => {
    setSelectedSection(index)
    setTimer(timer)
  }

  const goToSelection = (index: number) => {
    const sections = ['skills', 'projects', 'awards']
    const elem = document.getElementById(sections[index - 1])
    console.log(elem?.scrollIntoView({ behavior: 'smooth' }))
  }

  return (
    <>
      <Head>
        <title>Filipe Montanari Soccol - Portfolio</title>
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
        <link rel="icon" href="/favicon.ico" />
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
              className={`${styles.bioItem} ${selectedSection == 1 ? styles.active : ''}`}
              onMouseEnter={() => setSelection(1)}
              onClick={() => goToSelection(1)}
            >
              Skills
            </button>
            <button
              className={`${styles.bioItem} ${selectedSection == 2 ? styles.active : ''}`}
              onMouseEnter={() => setSelection(2)}
              onClick={() => goToSelection(2)}
            >
              Projects
            </button>
            <button
              className={`${styles.bioItem} ${selectedSection == 3 ? styles.active : ''}`}
              onMouseEnter={() => setSelection(3)}
              onClick={() => goToSelection(3)}
            >
              Awards
            </button>
            <button
              onMouseEnter={() => setSelection(4)}
              className={`${styles.bioItem} ${selectedSection == 4 ? styles.active : ''}`}
              onClick={() => router.push('/blog')}
            >
              Blog
            </button>
          </div>
          <div className={`${styles.imageHolder}`}>
            <div className={`${styles.holderEffect} ${selectedSection == 1 ? styles.active : ''}`}>
              <div className={`${styles.backgroundImage} ${styles.imageThree}  ${selectedSection == 1 ? styles.active : ''}`}></div>
              <Image className={`${styles.foregroundImage}  ${selectedSection == 1 ? styles.active : ''}`} src={skills} alt='Title' height={500}></Image>
            </div>
            <div className={`${styles.holderEffect} ${selectedSection == 2 ? styles.active : ''}`}>
              <div className={`${styles.backgroundImage} ${styles.imageTwo} ${selectedSection == 2 ? styles.active : ''}`}></div>
              <Image className={`${styles.foregroundImage}  ${selectedSection == 2 ? styles.active : ''}`} src={projects} alt='Title' height={500}></Image>
            </div>
            <div className={`${styles.holderEffect} ${selectedSection == 3 ? styles.active : ''}`}>
              <div className={`${styles.backgroundImage} ${styles.imageOne}  ${selectedSection == 3 ? styles.active : ''}`}></div>
              <Image className={`${styles.foregroundImage}  ${selectedSection == 3 ? styles.active : ''}`} src={awards} alt='Title' height={500}></Image>
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
        <div className={styles.footer}>
          <hr />
          <div className={styles.social}>
            <a href="https://github.com/filipesoccol" target='_blank'><Icons name="github" size={24} /></a>
            <a href="https://www.linkedin.com/in/filipesoccol" target='_blank'><Icons name="linkedin" size={24} /></a>
            <a href="https://twitter.com/filipesoccol" target='_blank'><Icons name="twitter" size={24} /></a>
          </div>
          <p>LONDRINA - PARANA - BRAZIL</p>
          <p>filipe.soccol@gmail.com</p>
        </div>
      </main >
    </>
  )
}