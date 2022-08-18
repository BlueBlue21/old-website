import type { NextPage } from 'next'
import Head from 'next/head'
import Link from "next/link"
import Navbar from '../components/Navbar'

const NotFound: NextPage = () => {
    return (
        <>
            <Head>
                <title>BlueBlue21! - Not Found</title>
                <meta name="description" content="Hi, It's BlueBlue21! 👋" />
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:title" content="BlueBlue21!" />
                <meta property="og:description" content="Hi, It's BlueBlue21! 👋" />
                <meta name="theme-color" content="#1e73f5" />
            </Head>
            <Navbar />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center justify-center w-80 h-96 rounded-lg border shadow-md border-light-gray dark:border-gray">
                    <h1 className="m-2 text-xl font-bold text-blue">{"404 - Not Found!"}</h1>
                    <p>{"Can't found page in there!"}</p>
                    <p>{"Report bug or back to home!"}</p>
                    <Link href="./">
                        <button className="m-5 p-2 rounded-lg transition ease-in-out bg-blue text-white hover:bg-dark-blue">Back to home</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NotFound
