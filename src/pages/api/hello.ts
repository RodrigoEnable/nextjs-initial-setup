import type { NextApiRequest, NextApiResponse } from 'next'

type SuccessType = {
  message: string
}

type ErrorType = {
  error: string
}

export default async function Hello (req: NextApiRequest, res: NextApiResponse<SuccessType | ErrorType>) {
  if (req.method === 'GET') {
    res.status(200).json({ message: "Hello World" })
  } else {
    res.status(400).json({ error: "Bad request" })
  }
}
