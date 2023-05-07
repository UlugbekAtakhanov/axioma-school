

import React, { useEffect } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import logo from "../../assets/axioma-1.png"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";
import NavbarDropdown from "./NavbarDropdown";




export default function Example() {
    const { t } = useTranslation()
    const [openNav, setOpenNav] = React.useState(false);

    const dropdownList = [
        { title: t("home_page.navbar.dropdown.dropdown_links.link1"), url: "#", },
        { title: t("home_page.navbar.dropdown.dropdown_links.link2"), url: "#/list", },
        { title: t("home_page.navbar.dropdown.dropdown_links.link3"), url: "#", },
        { title: t("home_page.navbar.dropdown.dropdown_links.link4"), url: "#", },
        { title: t("home_page.navbar.dropdown.dropdown_links.link5"), url: "#", },
        { title: t("home_page.navbar.dropdown.dropdown_links.link6"), url: "#", },
        { title: t("home_page.navbar.dropdown.dropdown_links.link7"), url: "#", },
        { title: t("home_page.navbar.dropdown.dropdown_links.link8"), url: "#", },
    ]

    const navbarList = [
        { title: t("home_page.navbar.link1"), url: "#", },
        { title: t("home_page.navbar.link2"), url: "#", },
        { title: t("home_page.navbar.link3"), url: "#", },
        { title: t("home_page.navbar.link4"), url: "#", },
    ]

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

            {/* courses dropdown */}
            <div className="p-1 font-normal lg:hidden text-customYellow text-sm" >
                {t("home_page.navbar.dropdown.title")}
                <ul className="ml-6 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2">
                    {dropdownList.map((item, index) => (
                        <p key={index} className="hover:bg-customYellow group px-1">
                            <Link to={item.url} className="text-white group-hover:text-black  hover:text-white/50 text-sm ">{item.title}</Link>
                        </p>
                    ))}
                </ul>
            </div>

            {/* navbar list */}
            {navbarList.map((item, index) => (
                <p className="p-1 font-normal" key={index}>
                    <Link to={item.url} className="flex items-center text-sm text-customYellow hover:text-customYellow/50 transition-all">
                        {item.title}
                    </Link>
                </p>
            ))}

            <div className="p-1 font-normal text-sm">
                <select className="bg-transparent text-white border p-[2px] rounded text-xs w-12">
                    <option className="text-black" value="">Ru</option>
                    <option className="text-black" value="">En</option>
                </select>
            </div>

        </ul >
    );

    return (
        <div className="bg-[#151515]/100 sticky inset-0 z-10">
            <Navbar className=" main-container bg-transparent border-none  h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as={Link}
                        to="/"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        <img src={logo} alt="img" />
                    </Typography>

                    <div className="flex items-center gap-4">

                        {/* dropdown */}
                        <NavbarDropdown />

                        {/* navlist */}
                        <div className="mr-4 hidden lg:block">{navList}</div>

                        {/* hamburger */}
                        <IconButton
                            variant="text"
                            className=" hover:opacity-50 transition-all ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="#EFFF04 "
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="#EFFF04"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>

                </div>

                <MobileNav open={openNav}>
                    {navList}
                </MobileNav>

            </Navbar>
        </div>
    );
}













// import { useTranslation } from "react-i18next"
// import logo from "../assets/axioma-1.png"

// const Navbar = () => {
//     const { t } = useTranslation()
//     return (
//         <div className='bg-[#151515] p-[21px] flex items-center justify-between'>

//             <div>
//                 <img src={logo} alt="img" />
//             </div>

//             <div>
//                 <a className="text-customYellow" href="">{t("home_page.navbar.dropdown")}</a>
//             </div>

//         </div>
//     )
// }

// export default Navbar