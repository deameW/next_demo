// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {mock,Random} from 'mockjs';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.status(200).json({ name: 'John Doe' })
  res.status(200).json(
    mock({
      'list|1-10':[
        {
          'name|1': [Random.cname(),Random.cname(),Random.cname()],
          birthday: Random.date('yyyy-MM-dd'),
          address: Random.county(true)
        }
      ]
    })
  )
}
