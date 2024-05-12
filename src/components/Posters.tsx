import { useState, useEffect } from "react";

import Poster from "./banners/rasa-poster/Poster";
import Poster2 from "./banners/rasa-poster-2/Poster2";

const Posters = () => {
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
        <div className="relative w-full">
            {posters[currentSlide]}

            <div className="absolute flex items-center justify-center gap-2 w-full bottom-3">
                <button
                    className={`rounded-full ${
                        currentSlide === 0
                            ? "bg-[#f47b20] size-3"
                            : " bg-[#fdba13] size-2"
                    }`}
                    onClick={prevSlide}></button>
                <button
                    className={`rounded-full ${
                        currentSlide === 1
                            ? "bg-[#fdba13] size-3"
                            : "bg-[#f47b20] size-2"
                    }`}
                    onClick={nextSlide}></button>
            </div>
        </div>
    );
};

export default Posters;
