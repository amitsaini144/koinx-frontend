interface myProps {
    title: string;
    description: string
}

export default function EventCard({ title, description }: myProps) {
    return (
        <div className="bg-blue-100 px-4 py-6 rounded-lg w-96  flex ">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-2 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                </svg>
            </div>
            <div className="pr-1">
                <p className="font-semibold mb-3  ">{title} </p>
                <p className="text-xs text-black/80 font-medium ">{description}</p>
            </div>
        </div>
    )
}
