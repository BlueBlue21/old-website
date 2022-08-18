import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import profileImage from '../public/profile.png'

import config from '../public/config.json'

import { SiGithub, SiReplit } from 'react-icons/si';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BlueBlue21!</title>
        <meta name="description" content="Hi, It's BlueBlue21! 👋" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="BlueBlue21!" />
        <meta property="og:description" content="Hi, It's BlueBlue21! 👋" />
        <meta name="theme-color" content="#1e73f5" />
      </Head>
      <Navbar />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center justify-center w-80 h-96 rounded-lg border shadow-md border-light-gray dark:border-gray">
          <Image width="130px" height="130px" src={profileImage} alt="Me!" className="scale-75 rounded-full" />
          <h1 className="text-xl">{"Hi, It's "} <p className="inline text-xl font-bold text-blue">{"BlueBlue21!"}</p> {" 👋"}</h1>
          <p>{"Born in South Korea!"}</p>
          <p>{"He/His - Age : "} {new Date().getFullYear() - config.Year} {" Years Old"}</p>
          <p>{"Discord : "} {config.Discord}</p>
          <div className="flex space-x-3 p-5">
            <Link href={"https://github.com/BlueBlue21"}><button>
              <SiGithub className="w-7 h-7 transition ease-in-out text-dark dark:text-white hover:text-blue hover:cursor-pointer" /></button>
            </Link>
            <Link href={"https://replit.com/@BlueBlue21"}><button>
              <SiReplit className="w-7 h-7 transition ease-in-out text-dark dark:text-white hover:text-blue hover:cursor-pointer" /></button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
