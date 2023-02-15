import type { NextApiRequest, NextApiResponse } from 'next/types'

const getImageById = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  const { options }: { options: string } = req.body
  const response = await fetch(process.env.GRAPHQL_ENDPOINT ?? '', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `{imageById(id:${id}){${options}}}`,
    }),
  })
  const result = await response.json()
  res.json(result.data)
}
export default getImageById
