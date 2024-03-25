interface myProps {
    title : string;
    value : string;
}

export default function FundamentalCard( { title, value }: myProps) {
    return (
        <>
            <div className="flex justify-between mb-3 mt-3 md:pr-2 ">
                <p className="text-black/60">{ title }</p>
                <p>{ value }</p>
            </div>
            <hr />
        </>
    )
}
