interface myprops {
    key?: number;
    label: {
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

}

export default function AlsoLikeCard({ label }: myprops) {
    return (
        <div className=" rounded-lg p-3 border-2 shadow-sm border-black/10 w-56">
            <div className="flex mb-2 pl-1">
                <img src={label.item.small} className="w-5 h-5 mr-2" />
                <p className="text-sm font-medium">{label.item.name}</p>
            </div>

            <p className=" font-medium text-base pl-1 text-black/90">{label.item.market_cap_rank}</p>
            <img src={label.item.data.sparkline} className="ml-6 inline-block" />
        </div>


    )
}
