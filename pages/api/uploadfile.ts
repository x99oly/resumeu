import type { NextApiRequest, NextApiResponse } from "next"
import pdfParse from "pdf-parse"

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(400).end()

  const chunks: Uint8Array[] = []

  req.on("data", (chunk) => chunks.push(chunk))
  req.on("end", async () => {
    const buffer = Buffer.concat(chunks)
    const data = await pdfParse(buffer)
    res.status(200).json({ text: data.text })
  })
}
