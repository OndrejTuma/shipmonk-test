// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  name: string
}

const API_KEY = process.env.API_KEY
const API_ENDPOINT = process.env.API_ENDPOINT || ''
const API_USERNAME = process.env.API_USERNAME

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { bins, items, params } = req.body

  const result = await axios.post(API_ENDPOINT, {
    username: API_USERNAME,
    api_key: API_KEY,
    bins,
    items,
    params: {
      images_width: 200,
      images_height: 150,
      images_complete: 1,
      images_separated: 1,
      ...params,
    },
  })

  const { data: { response }} = result

  res.status(200).json(response)
}
