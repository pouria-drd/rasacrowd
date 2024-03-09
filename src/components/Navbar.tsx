import { ROUTES } from "../router/routes";
import RasaIcon from "./icons/RasaIcon.png";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="glass font-vazir fixed z-[1000]
            bg-white bg-opacity-90
            text-sm text-gray-800
            left-0 shadow-sm w-full px-4 sm:px-20 md:px-40 lg:px-72 py-4">

            <div className='grid grid-cols-11 w-full'>
                <div className="flex items-center justify-center gap-10 col-span-8 col-start-3">
                    <NavLink to={ROUTES.TRACKING} className="nav-link" >
                        پیگیری
                    </NavLink>

                    <NavLink to={ROUTES.EDIT} className="nav-link">
                        ویرایش
                    </NavLink>

                    <NavLink to={ROUTES.HOME} className="nav-link">
                        خانه
                    </NavLink>
                </div>

                <div className='flex justify-end
                    col-span-1 col-start-12'>
                    <Link to={ROUTES.HOME}>
                        <img className="w-8" src={RasaIcon} alt="RasaIcon" loading='lazy' />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
