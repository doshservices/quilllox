import { NavLink } from "react-router-dom";
import { AppLogo, AppMiniLogo } from "../assets/AppLogo";
import { useRef } from "react";
import useClickOutside from "../utils/useClickOutside";

const AppNav = () => {
    const navRef = useRef<HTMLElement>(null)
    const headerRef = useRef<HTMLHeadingElement>(null)

    const showMenu = () => {
        navRef?.current?.classList.toggle('active-menu')
    }

    useClickOutside(headerRef,
        () => {
            navRef?.current?.classList.remove('active-menu')
        }
    )

    return (
        <header ref={headerRef} className="app-header w-full text-white font-montserrat font-medium text-sm px-[5%] md:py-2 border-b-red-primary border-b-[1px] relative z-50">
            <div className="md:hidden">
                <AppMiniLogo />
            </div>
            <div onClick={showMenu} className="flex flex-col gap-1.5 cursor-pointer w-fit md:hidden">
                <span className="inline-block bg-white h-[1.5px] w-6"></span>
                <span className="inline-block bg-white h-[1.5px] w-6"></span>
                <span className="inline-block bg-white h-[1.5px] w-6"></span>
            </div>
            <nav ref={navRef}
                className="app-nav flex justify-between items-center gap-5 md:gap-[7%]">
                <div className="fixed bg-black/40 inset-0 pointer-events-none -z-10 top-[60px] md:hidden"></div>
                <div className="md:grow flex flex-col gap-8 md:gap-0 md:flex-row justify-between mb-5 md:mb-0 md:items-center basis-[100px] order-2 md:order-1">
                    <NavLink onClick={showMenu} to="/">SPECIAL EVENTS</NavLink>
                    <NavLink onClick={showMenu} to="/">VENUE</NavLink>
                    <NavLink onClick={showMenu} to="/">DRINKS</NavLink>
                </div>
                <NavLink onClick={showMenu} className='order-1 md:order-2 block mb-6 md:mb-0' to="/">
                    <AppLogo />
                </NavLink>
                <div className="md:grow flex flex-col gap-8 md:gap-0 md:flex-row justify-between md:items-center basis-[100px] order-3">
                    <NavLink onClick={showMenu} to="/">GALLERY</NavLink>
                    <NavLink onClick={showMenu} to="/">FAQs</NavLink>
                    <NavLink onClick={showMenu} to="/contact">CONTACT</NavLink>
                </div>
            </nav>
        </header>
    )
}
export default AppNav;