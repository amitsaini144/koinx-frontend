import AlsoLikeCard from "./AlsoLikeCard"
import { useState, useEffect, useRef } from "react"
import axios, { AxiosError } from "axios"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export default function AlsoLikeSection() {
  const [trendingCoin, setTrendingCoin] = useState([]);
  const [error, setError] = useState<AxiosError | null>(null);
  const sliderRefOne = useRef<HTMLDivElement>(null);
  const sliderRefTwo = useRef<HTMLDivElement>(null);

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
    item: {
      id: string;
      score: number;
      name: string;
      small: string;
      market_cap_rank: number;
      data: {
        price: number;
        sparkline: string;
      }
    }
  }

  function coinDetails(c: COIN) {
    return <div key={c.item.id} className="my-2 ml-1">
      <AlsoLikeCard label={c} />
    </div>
  }

  const slide = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    const scrollAmount = direction === 'left' ? -500 : 500;
    if (ref.current) {
      ref.current.scrollLeft += scrollAmount;
    }
  };

  if (error) {
    return (
      <div>
        <div>Error: {error.message}</div>
      </div>
    );
  }

  return (
    <div className="bg-white pl-10 pb-16">

      <h1 className="text-2xl font-semibold mb-4 pt-10 ml-2">You May Also Like</h1>

      <div className='relative flex items-center mr-20 -ml-8 -mb-5 ' >
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 pl-3' onClick={() => slide(sliderRefOne, 'left')} size={40} />
        <div ref={sliderRefOne} className='w-full flex h-full overflow-x-scroll scroll whitespace-normal scroll-smooth scrollbar-hide gap-2 '>
          {trendingCoin.map(coinDetails)}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 pl-3' onClick={() => slide(sliderRefOne, 'right')} size={40} />
      </div>

      <h1 className="text-2xl font-semibold mb-4 pt-10 ml-2">Trending Coins</h1>

      <div className='relative flex items-center mr-20 -ml-8 -mb-5 ' >
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 pl-3' onClick={() => slide(sliderRefTwo, 'left')} size={40} />
        <div ref={sliderRefTwo} className='w-full flex h-full overflow-x-scroll scroll gap-2 whitespace-normal scroll-smooth scrollbar-hide  '>
          {trendingCoin.map(coinDetails)}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 pl-3' onClick={() => slide(sliderRefTwo, 'right')} size={40} />
      </div>



    </div>
  )
}


