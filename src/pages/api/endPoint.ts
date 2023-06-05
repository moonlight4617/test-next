import axios from 'axios';

type Props = {}

export async function useBlogs() {
  const result = await axios.get(
    "/api/blog/fluid_27/fluid-27.hatenablog.com/atom/entry",
    {
      auth: {
        username: "fluid_27",
        password: "spsq4vc7f8"
      }
    }
  )
    .then((data) => {
      // const portfolioArray = data.data.data.map((portfolio: any, index: number) => {
      //   return index < 3 ? { ...portfolio.attributes } : null
      // });
      console.log(data);
      // return portfolioArray
    })
    .catch(err => {
      console.log("err:", err);
    });

  return (
    result
  )
}