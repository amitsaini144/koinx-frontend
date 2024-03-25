import { useState, useEffect } from "react"
import axios, { AxiosError } from "axios"
import TrendingCoinCard from "./TrendingCoinCard";

export default function TrendingCoins() {
  const [trendingCoin, setTrendingCoin] = useState([]);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.coingecko.com/api/v3/search/trending");
        setTrendingCoin(response.data.coins);
      } catch (error) {
        setError(error as AxiosError);
      }
    };
    fetchData();
  }, []);
  interface COIN {
    item :{
    id: string;
    score: number;
    name: string;
    small: string;
    market_cap_rank: number;
    data: {
      price: number;
    }
  }
}
function coinDetails(c: COIN) {
  return <div key={c.item.id} className="w-full my-2 ml-1">
    <TrendingCoinCard label={c} />
  </div>
}
if (error) {
  return (
    <div>
      <div>Error: {error.message}</div>
    </div>
  );
}

return (
  <div className="bg-white lg:max-w-80 lg:min-w-92 p-4 xl:ml-3 ml-1 mb-3 rounded-lg flex flex-wrap">
    <div className="w-full mb-4">
      <h2 className="text-2xl font-bold ">Trending Coins (24)</h2>
    </div>
      {trendingCoin.slice(0,3).map(coinDetails)}
  </div>
)
}


