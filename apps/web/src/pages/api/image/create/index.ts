import type { NextApiRequest, NextApiResponse } from 'next/types'
import { getServerSession } from 'next-auth/next'
import { defaultNegativePrompt, defaultPrompt } from '../../../../const/prompt'
import { authOptions } from '../../auth/[...nextauth]'

const createImage = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions)
  if (!session) res.end()
  const { prompt, userId, keyword } = req.body
  if (prompt.length === 0) res.end()
  const response = await fetch(process.env.GRAPHQL_ENDPOINT ?? '', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
mutation {
  imageCreate(
    imageInput: {prompt: "{{{ ${prompt} }}} ,${defaultPrompt}", negativePrompt: "${defaultNegativePrompt}", 
    clipSkip: 2, steps: 20, userId: ${userId}, 
    description: "${prompt}",
    keyword: "${keyword}" }
  ) {
    image {
      id
    }
  }
}
      `,
    }),
  })
  const createImageResponse = await response.json()
  res.json({ session: createImageResponse })
}
export default createImage
