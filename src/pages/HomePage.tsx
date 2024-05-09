import { ROUTES } from "../router/routes";
import { useState, useEffect } from "react";
import Supporters from "../components/Supporters";
import SurveyLinkCard from "../components/SurveyLinkCard";
import BaseCard from "../components/custom-ui/card/BaseCard";

import Poster from "../components/banners/rasa-poster/Poster";
import Poster2 from "../components/banners/rasa-poster-2/Poster2";

function HomePage() {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const posters = [<Poster />, <Poster2 />];

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % posters.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + posters.length) % posters.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % posters.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Clean up on component unmount
    }, [currentSlide, posters.length]);

    return (
        <BaseCard>
            <div className="relative w-full">
                {posters[currentSlide]}

                <div className="absolute flex items-center justify-center gap-2 w-full bottom-3">
                    <button
                        className={`bg-[#E0DDCF] rounded-full ${
                            currentSlide === 0 ? "size-3" : "size-2"
                        }`}
                        onClick={prevSlide}></button>
                    <button
                        className={`bg-[#E0DDCF] rounded-full ${
                            currentSlide === 1 ? "size-3" : "size-2"
                        }`}
                        onClick={nextSlide}></button>
                </div>
            </div>

            <SurveyLinkCard
                title="پرسشنامه خدمات"
                href={ROUTES.SERVICE}
                badgeColor="green"
                text="کسب و کارهایی که میتوانند خدماتی را به کسب و کارهای دیگر ارائه دهند."
            />
            <Supporters />
        </BaseCard>
    );
}

export default HomePage;
