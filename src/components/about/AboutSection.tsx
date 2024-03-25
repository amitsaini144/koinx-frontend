import BitcoinCard from "./BitcoinCard"
import mbOne from "@/assets/images/mobile-1.jpg"
import mbTwo from "@/assets/images/mobile-2.jpg"

export default function AboutSection() {
    return (
        <div className="bg-white md:pl-8 md:pr-10 px-2 py-6 rounded-lg shadow-sm mb-10">
            <h1 className="text-2xl font-semibold mb-5">About Bitcoin</h1>
            <h2 className="text-lg font-semibold mb-2">What is Bitcoin?</h2>
            <p className="font-medium text-sm text-black/90  mb-4">Bitcoin (BTC) is a cryptocurrency, a virtual currency designed to act as money and a form of payment outside the control of any one person, group, or entity, thus removing the need for third-party involvement in financial transactions. It is rewarded to blockchain miners for verifying transactions and can be purchased on several exchanges.</p>
            <hr />
            <h2 className="text-lg font-semibold mb-2 mt-3">Lorem ipsum dolor sit amet</h2>
            <p className="font-medium text-sm text-black/90 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare congue interdum. Donec non nulla pretium, viverra neque elementum, mollis nisl. Donec auctor sapien at tellus sollicitudin hendrerit. Aenean felis arcu, sodales non mauris sit amet.
                tempus viverra tortor. Etiam quis blandit magna. Pellentesque cursus nibh id vulputate ultrices. Aliquam id sapien libero. Curabitur vel dolor vitae purus eleifend interdum a ac orci.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare congue interdum. Donec non nulla pretium, viverra neque elementum, mollis nisl. Donec auctor sapien at tellus sollicitudin hendrerit. Aenean felis arcu, sodales non mauris sit amet.tempus viverra tortor. Etiam quis blandit magna. Pellentesque cursus nibh id vulputate ultrices. Aliquam id sapien libero. Curabitur vel dolor vitae purus eleifend interdum a ac orci.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare congue interdum. Donec non nulla pretium, viverra neque elementum, mollis nisl. Donec auctor sapien at tellus sollicitudin hendrerit. Aenean felis arcu, sodales non mauris sit amet.tempus viverra tortor. Etiam quis blandit magna. Pellentesque cursus nibh id vulputate ultrices. Aliquam id sapien libero. Curabitur vel dolor vitae purus eleifend interdum a ac orci.
            </p>
            <hr />
            <h2 className="text-2xl font-semibold mb-1 mt-3">Already Holding Bitcoin?</h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-2 mr-0">
            
                <BitcoinCard bgColor="gradient-to-r from-emerald-300 via-cyan-600 to-sky-800" title="Calculate your Profits" imgURL={mbTwo} />
                <BitcoinCard bgColor="gradient-to-r from-red-400 via-red-500 to-red-500" title="Calculate your tax liability" imgURL={mbOne} />
            </div>
            <hr />
            <p className="font-medium text-sm text-black/90 mb-4 mt-2">vulputate ultrices. Aliquam id sapien libero. Curabitur vel dolor vitae purus eleifend interdum a ac orci. Donec pulvinar pharetra tellus a feugiat. Vivamus dui nunc, ultricies eget lectus id, dictum pulvinar felis. Pellentesque euismod erat rhoncus odio efficitur, quis finibus enim dictum. Etiam hendrerit ante sit amet sem vehicula eleifend. Curabitur sollicitudin rutrum nis</p>
        </div>
    )
}
