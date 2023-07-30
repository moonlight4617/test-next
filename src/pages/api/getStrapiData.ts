import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import getConfig from 'next/config';
// Next.jsの設定を取得
const { publicRuntimeConfig } = getConfig();


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  try {
    const result = await axios.get(publicRuntimeConfig.strapiApi)
    // console.log(result.data)
    return res.status(200).json(result.data);
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({ message: "An error occurred" });
  }
}