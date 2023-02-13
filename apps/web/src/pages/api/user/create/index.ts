import type { NextApiRequest, NextApiResponse } from 'next/types'

const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password, username } = req.body
  const response = await fetch(process.env.GRAPHQL_ENDPOINT ?? '', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `mutation {userCreate(userInput:{email:"${email}"password:"${password}"avatarUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Math.ceil(
        Math.random() * 1008,
      )}.png",biography:"自己紹介をご記入下さい。",username:"${username}"}){__typename}}`,
    }),
  })
  if (!response.ok) throw new Error(response.statusText)
  res.json({ result: 'ok' })
}
export default createUser
