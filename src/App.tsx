import Navbar from "@/components/navbar/Navbar"
import PageLocation from "@/components/pageLocation/PageLocation"
import TradingViewWidget from "@/components/tradingView/TradingViewWidget";
import GetStartCard from "@/components/getStarted/GetStartCard"
import TrendingCoins from "@/components/trendingSection/TrendingSection";
import SentimentCard from "@/components/sentiment/SentimentSection";
import AboutSection from "@/components/about/AboutSection";
import TokenomicsSection from "@/components/tokenomics/TokenomicsSection";
import TeamSection from "@/components/team/TeamSection";
import AlsoLikeSection from "@/components/alsoLike/AlsoLikeSection";
import PerformanceSection from "@/components/performance/PerformanceSection";

function App() {

  return (
    <>
      <div className="bg-slate-200 min-h-screen ">
        <Navbar />
        <PageLocation />
        <div className="h-full grid grid-cols-12 gap-2 lg:pr-2">
          <div className="col-span-12 lg:col-span-9  ml-2 lg:ml-9 mr-2 lg:mr-7"><TradingViewWidget /></div>
          <div className="col-span-0 lg:col-span-3 hidden lg:block ">
            <div className="xl:mx-2 "><GetStartCard /></div>
            <div className="xl:mr-3 mt-5"><TrendingCoins /></div>
          </div>
        </div>

        <div className="grid grid-cols-12">
          <div className="lg:col-span-9 col-span-12 lg:ml-8 "><PerformanceSection /></div>
        </div>

        <div className="grid grid-cols-12">
          <div className="lg:col-span-9 col-span-12 lg:ml-8"><SentimentCard /></div>
        </div>

        <div className="grid grid-cols-12">
          <div className="lg:col-span-9 col-span-12 lg:mx-10 mx-2"><AboutSection /></div>
        </div>

        <div className="hidden lg:block">
          <div className="grid grid-cols-12 ">
            <div className="col-span-9 ml-10 mr-10"><TokenomicsSection /></div>
          </div>
        </div>

        <div className="grid grid-cols-12">
          <div className="lg:col-span-9 col-span-12 lg:mx-10 mx-2"><TeamSection /></div>
        </div>

        <div>
          <AlsoLikeSection />
        </div>

        <div className="block lg:hidden">
          <div className="mx-2 "><GetStartCard /></div>
          <div className="mr-3 mt-5"><TrendingCoins /></div>
        </div>

      </div>
    </>
  )
}

export default App
