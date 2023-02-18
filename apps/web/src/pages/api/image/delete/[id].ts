import type { NextApiRequest, NextApiResponse } from 'next/types'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../auth/[...nextauth]'

const deleteImage = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions)
  if (!session) res.end()
  const { id } = req.query

  const response = await fetch(process.env.GRAPHQL_ENDPOINT ?? '', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
mutation {
  imageDelete(id: ${id}) {
    __typename
  }
}
      `,
    }),
  })
  const createImageResponse = await response.json()
  res.json({ session: createImageResponse })
}
export default deleteImage
