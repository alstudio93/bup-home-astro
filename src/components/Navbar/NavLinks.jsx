import { useState } from "react";
import ThemeIcon from "../ThemeIcon";
const NavLinks = () => {
    const [open, setOpen] = useState(false);

    const Links = [
        {
            title: "Home",
            location: "#"
        },
        {
            title: "BŪP Smart Devices",
            location: "#products"
        },
        {
            title: "Mockups",
            location: "#mockups"
        },
        {
            title: "Features",
            location: "#features"
        },
        {
            title: "Pricing",
            location: "#pricing"
        },
        {
            title: "FAQ",
            location: "#faq"
        },
        {
            title: "Login",
            location: "https://www.bup.bio/login"
        },
    ]

    return (
        <>
            <ul className={` lg:flex lg:items-center   gap-x-3 text-center font-normal" ${open ? "flex flex-col  gap-y-8 fixed top-14 left-0 right-0 bottom-0 min-h-screen bg-[#ffffff] text-base pt-20 pb-[120px] overflow-y-scroll dark:bg-black" : "hidden text-sm"}`}>
                {
                    Links.map((link) => (
                        <div key={link.title}>
                            <li className=" pb-10 lg:pb-0">
                                <a href={link.location}>{link.title}</a>
                            </li>
                            <hr className="w-4/5 mx-auto lg:hidden" />
                        </div>
                    ))
                }
                <ThemeIcon/>
            </ul>
            <i className="fas fa-bars cursor-pointer lg:hidden text-xl" onClick={() => setOpen(open => !open)}></i>

        </>
    )
}

export default NavLinks