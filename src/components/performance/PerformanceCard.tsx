interface myProps {
    title: string;
    value: string;
}

export default function PerformanceCard({ title, value }: myProps) {
    return (
        <div className="flex flex-col items-center  gap-3 text-sm text-black/60">
            <p>{ title }</p>
            <p className="text-black/90">{ value }</p>
        </div>
    )
}
