import { NavLink } from "react-router-dom";
import { AppLogo } from "../assets/AppLogo";

const AppNav = () => {
    return (
        <header className="text-white font-montserrat font-medium text-sm px-[5%] py-2">
            <nav className="flex justify-between items-center">
                <NavLink to="/">SPECIAL EVENTS</NavLink>
                <NavLink to="/">VENUE</NavLink>
                <NavLink to="/">DRINKS</NavLink>
                <NavLink to="/"><AppLogo /></NavLink>
                <NavLink to="/">GALLERY</NavLink>
                <NavLink to="/">FAQs</NavLink>
                <NavLink to="/">CONTACT</NavLink>
            </nav>
        </header>
    )
}
export default AppNav;