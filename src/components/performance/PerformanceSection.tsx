import SentiSubHeading from "../sentiment/SentiSubHeading"
import FundamentalCard from "./FundamentalCard";
import PerformanceCard from "./PerformanceCard";

export default function PerformanceSection() {
  return (
    <div className="bg-white p-4 m-2 mb-10 mr-2 lg:mr-10 rounded-lg">
      <h1 className="text-2xl font-semibold mb-5">Performance</h1>

      <div className="flex font-semibold justify-between mb-8 md:px-1">
        <PerformanceCard title="Today's Low" value="46,930.22" />
        <div className="flex flex-col items-center lg:w-2/3 w-2/4  justify-center mt-5">
          <div className="h-1.5 w-full bg-gradient-to-r from-red-500 via-orange-500 to-green-500 ml-7 rounded-sm"></div>
          <p className="flex flex-col items-center ml-32 sm:ml-40 md:ml-44 lg:ml-80 text-sm text-black/60">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
            $48,637.83</p>
        </div>
        <PerformanceCard title="Today's High" value="49,343.83" />
      </div>

      <div className="flex font-semibold justify-between mb-5 md:px-1">
        <PerformanceCard title="52W Low" value="16,930.22" />
        <div className="flex flex-col items-center lg:w-2/3 w-2/4 justify-center">
          <div className="h-1.5 w-full bg-gradient-to-r from-red-500 via-orange-500 to-green-500 ml-7 rounded-sm"></div>
        </div>
        <PerformanceCard title="52W High" value="49,743.83" />
      </div>

      <div className="mb-2">
        <SentiSubHeading title="Fundamentals" />
      </div>

      <div className="grid lg:grid-cols-2 gap-x-28 text-sm font-semibold mb-10 md:px-5">
        <div>
          <FundamentalCard title="Bitcoin Price" value="$16,815.46" />
          <FundamentalCard title="24h Low / 24h High" value="$16,382.07 / $16,874.12" />
          <FundamentalCard title="7d Low / 7d High" value="$16,382.07 / $16,874.12" />
          <FundamentalCard title="Trading Volume" value="$23,249,202,782" />
          <FundamentalCard title="Market Cap rank" value="#1" />
        </div>
        <div>
          <FundamentalCard title="Market Cap" value="$323,507,290,047" />
          <FundamentalCard title="Market Cap Dominance" value="38.343%" />
          <FundamentalCard title="Volume / Market Cap" value="0.0718" />
          <FundamentalCard title="All-Time High" value="$69,044.77" />
          <FundamentalCard title="All-Time Low" value="$67.81" />
        </div>
      </div>

    </div>
  )
}
