import { ROUTES } from "../../router/routes";
import { NavLink, Link } from "react-router-dom";

import RasaIcon from "../icons/RasaIcon.png";

const Navbar = () => {
    return (
        <nav
            className="glass font-vazir fixed z-50
            bg-white bg-opacity-90
            text-sm
            left-0 shadow-sm
            w-full py-4">
            <div
                className="flex items-center justify-between gap-1
                w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl px-4 sm:px-0 mx-auto">
                <div className="text-rasa-blue-350 w-full">
                    <NavLink to={ROUTES.SURVEYS}>پرسشنامه ها</NavLink>
                </div>
                <div
                    className="flex items-center justify-center gap-4 md:gap-7
                    text-rasa-blue-350 w-full">
                    <NavLink to={ROUTES.TRACKING}>پیگیری</NavLink>

                    <NavLink to={ROUTES.SURVEYS} className="whitespace-nowrap">
                        جذب سرمایه
                    </NavLink>
                    <NavLink to={ROUTES.EDIT}>ویرایش</NavLink>

                    <NavLink to={ROUTES.HOME}>خانه</NavLink>
                </div>

                <Link
                    to={ROUTES.HOME}
                    className="flex items-center justify-center w-full">
                    <div
                        className="flex items-center justify-end gap-3
                        text-rasa-blue-700 w-full">
                        <div className="text-right text-xs w-full">
                            <p>رساکراد</p>
                            <p>رسانه سرمایه گذاران</p>
                            <p>و استارت آپ ها</p>
                        </div>

                        <img
                            className="w-12"
                            src={RasaIcon}
                            alt="RasaIcon"
                            loading="lazy"
                        />
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
