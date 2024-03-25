import NavLink from "./NavLink"
import Button from "./BlueButton"
import Logo from "./Logo"
import { IonIcon } from "@ionic/react"
import { menuOutline, closeOutline } from "ionicons/icons";
import { useState, useRef } from 'react';


function Navbar() {
    const [icon, setIcon] = useState(menuOutline);
    const menuRef = useRef<HTMLDivElement>(null);

    function ToggleMenu() {
        setIcon(icon === menuOutline ? closeOutline : menuOutline);
        if (menuRef.current) {
            menuRef.current.classList.toggle('top-[9%]')
                ;
        }
    }
    return (
        <nav className="bg-white md:sticky top-0 z-10 shadow-sm flex justify-between items-center py-4 ">
            <div className="ml-10 ">
                <Logo />
            </div>
            <div ref={menuRef} className="absolute duration-500 md:static bg-white min-h-[40vh] md:min-h-fit left-0 top-[-100%] w-full md:w-auto flex items-center px-5">
                <div className="flex md:flex-row flex-col justify-between md:items-center mr-10 mt-1 md:gap-[1vw] gap-8">
                    <NavLink label="Crypto Taxes" />
                    <NavLink label="Free tools" />
                    <NavLink label="Resourse Center" />
                    <div className="mr-1 flex ml-3 sm:ml-8 md:ml-0">
                        <Button />
                    </div>
                </div>
            </div>
            <IonIcon onClick={ToggleMenu} icon={icon} size="large" className="cursor-pointer md:hidden"></IonIcon>
        </nav>
    )
}

export default Navbar