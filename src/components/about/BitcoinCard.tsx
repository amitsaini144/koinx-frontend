
interface myProps {
    bgColor: string;
    imgURL: string;
    title: string;
}

export default function BitcoinCard({ bgColor, imgURL, title }: myProps) {
    return (
        <div className={`bg-${bgColor} w-96 rounded-lg flex my-5 pl-3 py-3`}>
            <div>
            <img alt="image1" src={`${imgURL}`} className="h-28 rounded-lg " />
            </div>
            <div className="ml-8 w-44">
                <h1 className="text-white font-semibold text-xl mb-4 ">{title}</h1>
                <button className="bg-white text-black font-bold rounded-lg px-4 py-1 flex items-center text-sm">Check Now<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg> </button>
            </div>

        </div>
        
    )
}
