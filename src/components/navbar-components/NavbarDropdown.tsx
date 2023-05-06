

import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'



const menuItemClass = (active: boolean, disabled: boolean) => ` ${disabled ? "text-gray-400  pointer-events-none" : active ? "bg-customYellow text-black" : "text-white"} flex items-center gap-2 cursor-pointer m-[1px] py-1 px-2 whitespace-nowrap`

const NavbarDropdown = () => {
    const { t } = useTranslation()

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

    return (
        <div className='hidden lg:block'>
            <Menu as="div" className="relative z-[1]">

                {({ open }) => (
                    <>
                        <Menu.Button className="text-sm flex items-center gap-1 text-customYellow hover:text-customYellow/50">
                            {t("home_page.navbar.dropdown.title")}
                            <ChevronDownIcon className={` ${open ? "-rotate-180" : "rotate-0"}  w-3 translate-y-[1px] transition-all`} />
                        </Menu.Button>

                        <Transition
                            show={open}
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Menu.Items static className="absolute w-[556px] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] left-1/2 -translate-x-1/2 z-10 top-0 mt-[20px] bg-[#1f1f1f] text-customYellow p-1 outline-none text-[14px]">

                                {dropdownList.map((item, index) => (
                                    <Menu.Item key={index}>
                                        {({ active, disabled }) => (
                                            <Link to={item.url} className={menuItemClass(active, disabled)}>
                                                {item.title}
                                            </Link>
                                        )}
                                    </Menu.Item>
                                ))}

                            </Menu.Items>
                        </Transition>
                    </>
                )}

            </Menu>

        </div >
    )
}

export default NavbarDropdown