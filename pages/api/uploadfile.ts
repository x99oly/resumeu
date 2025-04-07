import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse
) {
    if (req.method !== "POST") return res.status(400).end()
    const data = req.body
    const id = 2
    res.status(200).json(data)
}