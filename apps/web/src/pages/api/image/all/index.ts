import type { NextApiRequest, NextApiResponse } from 'next/types'
const getAllImages = async (req: NextApiRequest, res: NextApiResponse) => {
  const { options }: { options: string } = req.body
  const response = await fetch(process.env.GRAPHQL_ENDPOINT ?? '', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `{allImages(order:"newest"){${options}}}`,
    }),
  })

  const result = await response.json()
  res.json(result.data)
}
export default getAllImages
