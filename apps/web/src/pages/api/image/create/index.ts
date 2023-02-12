import type { NextApiRequest, NextApiResponse } from 'next/types'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../auth/[...nextauth]'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions)
  if (!session) res.end()
  const response = await fetch(process.env.GRAPHQL_ENDPOINT ?? '', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query:
        // TODO パラメータをテンプレートリテラルで変更出来るように修正
        'mutation{imageCreate(input:{imageInput:{prompt:"test"steps:1clipSkip:2userId:1}}){image{prompt}}}',
    }),
  })
  const createImageResponse = await response.json()
  res.json({ session: createImageResponse })
}
