import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'

import config from '../public/config.json'

import { SiGithub } from 'react-icons/si';

import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"

const Projects: NextPage = () => {
    const [links, changeLinks] = useState(["./"])
    const [names, changeNames] = useState(["name"])
    const [descriptions, changeDescriptions] = useState(["[ Description! ]"])

    useEffect(() => {
        axios.get(`https://api.github.com/users/${config.GithubId}/repos`, {
        }).then(function (res: AxiosResponse<Array<any>>) {
            changeLinks(res.data.map(data => data.html_url))
            changeNames(res.data.map(data => data.name))
            changeDescriptions(res.data.map(data => data.description))
        })
    }, [])

    return (
        <>
            <Head>
                <title>BlueBlue21! - Projects</title>
                <meta name="description" content="Hi, It's BlueBlue21! 👋" />
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:title" content="BlueBlue21!" />
                <meta property="og:description" content="Hi, It's BlueBlue21! 👋" />
                <meta name="theme-color" content="#1e73f5" />
            </Head>
            <Navbar />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center w-80 h-96 overflow-y-scroll rounded-lg border shadow-md border-light-gray dark:border-gray">
                    {names.map((value, index) => (
                        <div key={index} className="mt-5 p-5 text-center border-light-gray dark:border-gray">
                            <Link href={links[index]}>
                                <h1 className="mt-2 text-xl font-bold text-blue hover:text-dark-blue hover:cursor-pointer">{names[index]}<SiGithub className="inline ml-2" /></h1>
                            </Link>
                            <p>{descriptions[index] ?? "[ No description! ]"}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects
