import axios from 'axios';

type Props = {}

export async function usePortfolio() {
  const result = await axios.get("http://localhost:1337/api/portfolios")
    .then((data) => {
      const portfolioArray = data.data.data.map((portfolio: any, index: number) => {
        return index < 3 ? { ...portfolio.attributes } : null
      });
      // console.log(...portfolioArray);
      return portfolioArray
    })
    .catch(err => {
      console.log("err:", err);
    });

  return (
    result
  )
}