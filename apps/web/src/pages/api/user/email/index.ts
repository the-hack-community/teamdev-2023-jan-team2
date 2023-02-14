import type { NextApiRequest, NextApiResponse } from 'next/types'

const searchUserByEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = JSON.parse(req.body)
  const response = await fetch(process.env.GRAPHQL_ENDPOINT ?? '', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `{userByEmail(email:"${email}"){images {id}}}`,
    }),
  })
  const result = await response.json()
  res.json(result.data)
}
export default searchUserByEmail
