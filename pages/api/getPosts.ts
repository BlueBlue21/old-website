import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'

type Data = {
    name: Array<any>
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    let names: Array<any> = ["nothing"]

    // fs.readdirSync("public/posts/").forEach(file => {
    //     if (file.endsWith(".md")) {
    //     }
    // })

    await res.status(200).json({ name: names })
}
