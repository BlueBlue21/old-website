import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'

import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"

const Blog: NextPage = () => {
    const route = useRouter()

    const [links, changeLinks] = useState(["./"])
    const [names, changeNames] = useState(["Name"])
    const [times, changeTimes] = useState(["2000/0/0"])
    const [descriptions, changeDescriptions] = useState(["Description"])

    useEffect(() => {
        axios.get("./api/getPosts", {
        }).then(function (res: AxiosResponse<Array<any>>) {
            // changeLinks(res.data.map(data => data.url))
            // changeNames(res.data.map(data => data.name))
            // changeTimes(res.data.map(data => data.time))
            // changeDescriptions(res.data.map(data => data.description))
        })
    }, [])

    if (route.query?.blog) {
        return (
            <>
                <Head>
                    <title>BlueBlue21! - {route.query?.blog}</title>
                    <meta name="description" content="Hi, It's BlueBlue21! 👋" />
                    <link rel="icon" href="/favicon.ico" />

                    <meta property="og:title" content="BlueBlue21!" />
                    <meta property="og:description" content="Hi, It's BlueBlue21! 👋" />
                    <meta name="theme-color" content="#1e73f5" />
                </Head>
                <Navbar />
            </>
        )
    } else {
        return (
            <>
                <Head>
                    <title>BlueBlue21! - Blog</title>
                    <meta name="description" content="Hi, It's BlueBlue21! 👋" />
                    <link rel="icon" href="/favicon.ico" />

                    <meta property="og:title" content="BlueBlue21!" />
                    <meta property="og:description" content="Hi, It's BlueBlue21! 👋" />
                    <meta name="theme-color" content="#1e73f5" />
                </Head>
                <Navbar />
                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex flex-col items-center w-80 h-96 overflow-y-scroll rounded-lg border shadow-md border-light-gray dark:border-gray">
                        <div className="mt-5 p-5 text-center border-light-gray dark:border-gray">
                            <h1 className="mt-2 text-xl font-bold text-blue">{"Coming Soon"}</h1>
                            <p>{"ToT"}</p>
                        </div>
                        {/* {names.map((value, index) => (
                            <div key={index} className="mt-5 p-5 text-center border-light-gray dark:border-gray">
                                <Link href={links[index]}>
                                    <h1 className="mt-2 text-xl font-bold text-blue hover:text-dark-blue hover:cursor-pointer">{names[index]}</h1>
                                </Link>
                                <p className="mt-2 text-sm">{times[index]}</p>
                                <p>{descriptions[index]}</p>
                            </div>
                        ))} */}
                    </div>
                </div>
            </>
        )
    }
}

export default Blog
