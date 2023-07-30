import axios from 'axios';
import { useEffect, useState } from 'react';

export function usePortfolio() {
  const [portfolio, setPortfolio] = useState<any>([]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fetchPortfolio = async () => {
        try {
          const response = await axios.get('/api/getStrapiData')
          const data = response.data;
          // console.log(data.data);
          setPortfolio(data.data)
        } catch {
          setPortfolio(null)
          console.log('error発生しました')
        }
      };
      fetchPortfolio();
    }
  }, [typeof window])

  return portfolio
}
