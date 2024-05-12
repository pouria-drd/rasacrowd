import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../router/routes";

import graphics from "./images/graphics.png";
import lineEffect from "./images/lineEffects.png";

import "./rasa-poster.css";

const Poster = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(ROUTES.SERVICE);
    };

    return (
        <section
            className="text-white font-peyda overflow-hidden
            flex flex-col items-center justify-start
            bg-gradient-to-bl
            from-[#0d456b] from-0% 
            to-[#1e093f] to-100%
            rounded-xl w-full min-h-96 relative">
            <img
                className="absolute w-full h-full fade"
                src={lineEffect}
                alt="lineEffect"
            />
            <img
                className="absolute hidden sm:block w-72 bottom-2 -left-8"
                src={graphics}
                alt="graphics"
            />
            <div className="text-[#f47b20] text-right z-10 pl-4 pr-12 pt-24 w-full">
                <h4>فراخوان</h4>
                <h1 className="text-2xl font-bold w-full">
                    خدمات دهندگان کسب و کار
                </h1>
                <div className="text-sm text-[#d5e6ed] r2l font-vazir mt-1 w-full">
                    <p>مهلت ثبت نام</p>
                    <p>25 اردیبهشت تا 7 خرداد</p>
                </div>

                <ul className="font-vazir list-disc list-inside text-white text-xs r2l mt-2 marker:text-[#f47b20]">
                    <li>مدیریت زنجیره ارزش</li>
                    <li>بازاریابی فروش</li>
                    <li>فناوری اطلاعات و زیر ساخت</li>
                    <li>حقوقی، مالی و حسابداری</li>
                    <li>سایر کسب و کار های خدمت رسان</li>
                </ul>

                <button
                    onClick={handleButtonClick}
                    className="bg-[#f47b20] hover:bg-[#0d456b] hover:text-[#f47b20] transition-all text-[#1e093f] 
                        px-5 py-1 rounded-2xl mt-4 font-semibold animate-pulse duration-1000">
                    ثبت نام
                </button>
            </div>
        </section>
    );
};

export default Poster;

{
    /* <div className="relative flex items-center justify-center w-full h-full pt-6 pr-4">
                <div className="absolute z-10 w-full">
                    <h3 className="text-[#f47b20] text-right font-medium w-full">
                        فراخوان
                    </h3>
                    <h1 className="text-2xl text-[#f47b20] text-right font-bold w-full">
                        خدمات دهنگان کسب و کار
                    </h1>
                    <div className="text-sm text-[#d5e6ed] r2l font-vazir mt-1 w-full h-full">
                        <p>22 تا 24 خرداد ماه</p>
                        <p>ورامین سالن شهید گلعباسی</p>
                    </div>
                </div>
            </div> */
}
