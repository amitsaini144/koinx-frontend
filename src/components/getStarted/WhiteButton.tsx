interface myProps {
    title: string;
}

export default function WhiteButton({ title }: myProps) {
    return (
        <button className="bg-white text-black font-semibold rounded-lg px-4 py-2 flex items-center">{ title }<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg> </button>
    )
}
