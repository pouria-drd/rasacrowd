import hand from "./images/hand.png";
import clock from "./images/clock.png";
import hive1 from "./images/hive1.png";
import hive2 from "./images/hive2.png";
import location from "./images/location.png";

import "./rasa-poster2.css";

const Poster2 = () => {
    return (
        <section
            className="text-white font-peyda
            flex flex-col items-center justify-start
            bg-gradient-to-b
            from-[#2ea1a6] from-0% 
            to-[#0d334a] to-100%
            rounded-xl w-full min-h-96 relative overflow-hidden">
            <img
                className="absolute w-fit h-full fade -left-32 sm:-left-40 top-0 opacity-50"
                src={hive1}
                alt="hive1"
            />
            <img
                className="absolute hidden sm:block w-60 bottom-0 left-0 -scale-x-100"
                src={hand}
                alt="hand"
            />
            <img
                className="absolute w-80 -top-10 -right-20 fade brightness-200"
                src={hive2}
                alt="hive2"
            />
            <div className="text-right z-10 pl-4 pr-12 pt-24 w-full">
                <h4 className="text-[#f6cf68] flash">اولین نمایشگاه تخصصی</h4>
                <h1 className="text-2xl text-[#fdba13] font-bold w-full">
                    نمایشگاه خدمات دهندگان کسب و کار
                </h1>

                <ul className="font-vazir list-disc list-inside text-white text-xs r2l mt-1 marker:text-[#fdba13]">
                    <li>مدیریت زنجیره ارزش</li>
                    <li>بازاریابی فروش</li>
                    <li>فناوری اطلاعات و زیر ساخت</li>
                    <li>حقوقی، مالی و حسابداری</li>
                    <li>سایر کسب و کار های خدمت رسان</li>
                </ul>

                <div className="text-sm text-[#d5e8ee] r2l font-vazir mt-2 w-full">
                    <div className="flex items-center gap-2">
                        <img className="w-3" src={clock} alt="time" />
                        <p>22 تا 24 خرداد</p>
                    </div>
                    <div className="flex items-center gap-2 mt-[6px]">
                        <img className="w-3" src={location} alt="location" />
                        <p>ورامین، سالن شهید گلعباسی</p>
                    </div>
                </div>

                {/* <button
                    className="bg-[#fdba13] hover:bg-[#2ea1a6] text-[#0d334a] hover:text-[#fdba13] transition-all 
                        px-5 py-1 rounded-2xl mt-4 font-semibold flash">
                    ثبت نام
                </button> */}
            </div>
        </section>
    );
};

export default Poster2;

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
