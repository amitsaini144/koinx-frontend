import WhiteButton from "./WhiteButton"
import logo from "@/assets/images/getStart.jpg"

export default function GetStartCard() {
    return (
        <div className="bg-blue-700 lg:max-w-80 lg:min-w-92 rounded-lg text-center p-7 m-1" >
            <div className=" flex justify-center lg:hidden mb-5">
                <img src={logo} className="h-36 rounded-full bg-blue-500" />
            </div>
            <div className="mb-4">
                <h1 className="text-white text-2xl font-semibold">Get Started with KoinX for FREE</h1>
            </div>

            <div className="mb-5">
                <p className="text-white text-xs">With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
            </div>

            <div className="hidden lg:flex justify-center mb-5">
                <img src={logo} className="h-36 rounded-full bg-blue-500" />
            </div>

            <div className="mb-3 flex justify-center">
                <WhiteButton title="Get Started for FREE" />
            </div>

        </div>
    )
}
