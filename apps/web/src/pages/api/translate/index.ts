import type { NextApiRequest, NextApiResponse } from 'next/types'

const getImageById = async (req: NextApiRequest, res: NextApiResponse) => {
  const { text } = req.body
  const urlencoded = new URLSearchParams()
  urlencoded.append('text', text)
  urlencoded.append('target_lang', 'EN')

  const response = await fetch('https://api-free.deepl.com/v2/translate', {
    method: 'POST',
    headers: {
      Authorization: `DeepL-Auth-Key ${process.env.DEEPL_AUTH_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: urlencoded,
  })
  if (!response.ok) throw new Error('error')
  const result = await response.json()
  res.json(result.translations.at(0).text)
}
export default getImageById
