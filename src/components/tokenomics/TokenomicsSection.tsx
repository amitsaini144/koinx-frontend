import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend

} from "chart.js"

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);


export default function TokenomicsSection() {
    const data = {
        labels: [],
        datasets: [{
            label: '',
            data: [80, 20],
            backgroundColor: [
                'rgb(0, 151, 167)',
                'rgb(255, 167, 0)',
            ],
            hoverOffset: 4,
            borderWidth: 0,

        }]
    };
    return (
        <div className="bg-white pl-8 pr-10 py-6 rounded-lg shadow-sm mb-10">
            <h1 className="text-2xl font-semibold mb-5">Tokenomics</h1>
            <h2 className="text-lg font-semibold mb-2">Initial Distribution</h2>
            <div className='flex items-center'>
                <div className='h-36 my-5'>
                    <Doughnut
                        data={data}
                    />
                </div>
                <div className='ml-6 text-sm text-black/80 font-medium'>
                    <div className='flex items-center gap-x-2 mb-1'>
                        <div className='h-2 w-2 rounded-full bg-cyan-700'></div>
                        <p>Crowdsale investors: 80%</p>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <div className='h-2 w-2 rounded-full bg-yellow-700'></div>
                        <p>Foundation: 20%</p>
                    </div>
                </div>
            </div>
            <p className="font-medium text-sm text-black/90  mb-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare congue interdum. Donec non nulla pretium, viverra neque elementum, mollis nisl. Donec auctor sapien at tellus sollicitudin hendrerit. Aenean felis arcu, sodales non mauris sit amet.
                tempus viverra tortor. Etiam quis blandit magna. Pellentesque cursus nibh id vulputate ultrices. Aliquam id sapien libero. Curabitur vel dolor vitae purus eleifend interdum a ac orci.</p>
        </div>
    )
}
