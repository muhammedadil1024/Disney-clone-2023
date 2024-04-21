import logo from '../assets/images/logo.png'
import { GoHomeFill } from "react-icons/go";
import { HiDotsVertical, HiPlus, HiStar } from "react-icons/hi";
import { HiMagnifyingGlass} from "react-icons/hi2";
import { RiMovie2Line } from "react-icons/ri";
import { PiTelevisionFill } from "react-icons/pi";
import NavItem from './NavItem';
import { useState } from 'react';

const Header = () => {

    const [toggle, setToggle] = useState(false)

    const menu = [
        {
            id: 0,
            name: "HOME",
            icon: GoHomeFill,
        },
        {
            id: 1,
            name: "SEARCH",
            icon: HiMagnifyingGlass,
        },
        {
            id: 2,
            name: "WATCH LIST",
            icon: HiPlus,
        },
        {
            id: 3,
            name: "ORIGINALS",
            icon: HiStar,
        },
        {
            id: 4,
            name: "MOVIES",
            icon: RiMovie2Line,
        },
        {
            id: 5,
            name: "SERIES",
            icon: PiTelevisionFill,
        },
    ];

    return (
        <div className="flex items-center  p-5 justify-between">
            <div className="flex gap-14 items-center">
                <img src={logo} alt="logo" className="w-[80px] md:w-[115px] object-cover px-2 mr-2" />
                <div className="hidden md:flex gap-14">
                    {menu.map((item) => (
                        <NavItem key={item.id} name={item.name} Icon={item.icon} />
                    ))}
                </div>
                <div className="flex md:hidden gap-5">
                    {menu.map((item) => item.id < 3 && <NavItem key={item.id} name={""} Icon={item.icon} />)}
                    <div className="md:hidden" onClick={() => setToggle(!toggle)}>
                        <NavItem name={""} Icon={HiDotsVertical} />
                        {toggle && (
                            <div className="absolute mt-3 p-3 bg-[#121212] border-[1px] border-gray-800 px-6 py-3">
                                {menu.map(
                                    (item) => item.id > 2 && <NavItem key={item.id} name={item.name} Icon={item.icon} />
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <img
                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                className="w-[40px] rounded-full "
            />
        </div>
    );
}

export default Header