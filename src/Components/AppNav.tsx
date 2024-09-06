import { NavLink } from "react-router-dom";
import { AppLogo } from "../assets/AppLogo";

const AppNav = () => {
    return (
        <header className="text-white font-montserrat font-medium text-sm px-[5%] py-2">
            <nav className="flex justify-between items-center gap-[7%]">
                <div className="grow flex justify-between items-center basis-[100px]">
                    <NavLink to="/">SPECIAL EVENTS</NavLink>
                    <NavLink to="/">VENUE</NavLink>
                    <NavLink to="/">DRINKS</NavLink>
                </div>
                <NavLink to="/"><AppLogo /></NavLink>
                <div className="grow flex justify-between items-center basis-[100px]">
                    <NavLink to="/">GALLERY</NavLink>
                    <NavLink to="/">FAQs</NavLink>
                    <NavLink to="/contact">CONTACT</NavLink>
                </div>
            </nav>
        </header>
    )
}
export default AppNav;