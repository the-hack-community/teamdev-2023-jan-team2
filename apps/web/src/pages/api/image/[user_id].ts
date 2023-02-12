import type { NextApiRequest, NextApiResponse } from 'next/types'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = JSON.parse(req.body)
  const response = await fetch(process.env.GRAPHQL_ENDPOINT ?? '', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `{imageById(id:${id}){imageSrc}}`,
    }),
  })
  const result = await response.json()
  res.json(result.data)
}
