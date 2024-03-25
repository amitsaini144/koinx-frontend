import EventCard from "./EventCard"
import SentiSubHeading from "./SentiSubHeading"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { data } from '@/EventData';
import { RefObject, useRef } from "react"

export default function SentimentCard() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slide = (ref: RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    const scrollAmount = direction === 'left' ? -500 : 500;
    if (ref.current) {
      ref.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="bg-white p-4 m-2 mb-10 lg:mr-10 mr-2 rounded-lg">

      <div className="mb-3">
        <h1 className="text-2xl font-semibold">Sentiment</h1>
      </div>

      <div className="mb-2">
        <SentiSubHeading title="Key Events" />
      </div>

      <div className=" my-10">
        <div className='relative flex items-center -ml-8 -mb-5 ' >
          <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 pl-3' onClick={() => slide(sliderRef, 'left')} size={40} />
          <div ref={sliderRef} className='w-full flex h-full overflow-x-scroll scroll whitespace-normal scroll-smooth scrollbar-hide'>
            <div className="flex gap-2">
              {data.map((m) => {
                return <EventCard key={m.id} title={m.title} description={m.description} />
              })}
            </div>
          </div>
          <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 pl-3' onClick={() => slide(sliderRef, 'right')} size={40} />
        </div>
      </div>

      <div className="mb-2">
        <SentiSubHeading title="Analyst Estimates" />
      </div>

      <div className="flex">

        <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center text-green-500 ">
          <h1 className="text-3xl font-semibold ml-1">76</h1>
          <h2 className="ml-1">%</h2>
        </div>

        <div className="ml-8 w-1/2 mb-4">
          <div className="flex items-center">
            <p className="text-black/70 font-medium text-sm my-3">Buy</p>
            <div className="h-1.5 w-72 bg-green-600 ml-7 rounded-sm"></div>
            <p className="text-sm ml-3 text-black/70 font-medium ">76%</p>
          </div>
          <div className="flex items-center">
            <p className="text-black/70 font-medium text-sm my-3">Hold</p>
            <div className="h-1.5 w-8 bg-gray-400 ml-6 rounded-sm"></div>
            <p className="text-sm ml-3 text-black/70 font-medium">8%</p>
          </div>
          <div className="flex  items-center">
            <p className="text-black/70 font-medium text-sm my-3">Sell</p>
            <div className="h-1.5 w-16 bg-red-500 ml-7 rounded-sm"></div>
            <p className="text-sm ml-3 text-black/70 font-medium">16%</p>
          </div>

        </div>
      </div>
    </div>
  )
}
