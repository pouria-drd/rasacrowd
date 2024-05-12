import { useState } from "react";
import { ROUTES } from "../../router/routes";
import { NavLink, Link } from "react-router-dom";

import Sidebar from "../sidebar/Sidebar";

import MenuIcon from "./icons/MenuIcon";
import RasaIcon from "../icons/RasaIcon.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
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
                        <NavLink
                            className="sm:block hidden"
                            to={ROUTES.SURVEYS}>
                            پرسشنامه ها
                        </NavLink>
                    </div>
                    <div
                        className="flex items-center justify-center gap-7 sm:gap-10
                        text-rasa-blue-350 w-full">
                        <NavLink
                            className="hidden sm:block"
                            to={ROUTES.TRACKING}>
                            پیگیری
                        </NavLink>
                        <NavLink className="hidden sm:block" to={ROUTES.EDIT}>
                            ویرایش
                        </NavLink>

                        <NavLink
                            className="sm:hidden block text-nowrap"
                            to={ROUTES.SURVEYS}>
                            پرسشنامه ها
                        </NavLink>

                        <NavLink to={ROUTES.HOME}>خانه</NavLink>
                    </div>

                    <div className="flex items-center justify-center gap-2 w-full">
                        <Link
                            to={ROUTES.HOME}
                            className="flex items-center justify-end gap-3
                            text-rasa-blue-700 w-full">
                            <div className="font-peyda hidden sm:block text-right text-[10px] w-full">
                                {/* <p>رساکراد</p> */}
                                <p className="leading-normal">
                                    رسانه سرمایه گذاران
                                </p>
                                <p className="leading-normal">و استارت آپ ها</p>
                            </div>

                            <img
                                className="w-7 sm:w-10"
                                src={RasaIcon}
                                alt="RasaIcon"
                                loading="lazy"
                            />
                        </Link>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="text-rasa-blue-700 block sm:hidden">
                            <MenuIcon />
                        </button>
                    </div>
                </div>
            </nav>

            <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};

export default Navbar;
