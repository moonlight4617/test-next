import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import getConfig from 'next/config';
// Next.jsの設定を取得
const { publicRuntimeConfig } = getConfig();

type Props = {}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  try {
    const result = await axios.get(
      publicRuntimeConfig.hatenaApi,
      // "https://blog.hatena.ne.jp/fluid_27/fluid-27.hatenablog.com/atom/entry",
      {
        auth: {
          username: process.env.HATENA_AUTH_USER || "",
          password: process.env.HATENA_AUTH_PATH || ""
        },
        headers: {
          'content-type': 'application/json',
        },
      }
    )
    return res.status(200).json(result.data);
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({ message: "An error occurred" });
  }
  // .then((data) => {
  // const portfolioArray = data.data.data.map((portfolio: any, index: number) => {
  //   return index < 3 ? { ...portfolio.attributes } : null
  // });
  // return portfolioArray
  //   })
  //   .catch(err => {
  //     console.log("err:", err);
  //   });

  // return (
  //   res.status(200).json(result.data)
  // )
}