interface myprops {
    key?: number;
    label: {
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

}

export default function TrendingCoinCard({ label }: myprops) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex">
            <img src={label.item.small} className="w-5 h-5 mr-2" />
            <p className="text-sm font-semibold">{label.item.name}</p>
            </div>
            <div className="bg-green-100 p-1 px-2 rounded-md max-w-48">
            <p className="text-green-500 font-medium text-sm">{label.item.market_cap_rank}</p>
            </div>
        </div>
    )
}
