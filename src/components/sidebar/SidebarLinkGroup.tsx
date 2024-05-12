import { ROUTES } from "../../router/routes";
import { useEffect, useState, useRef } from "react";

import SidebarLink from "./SidebarLink";

interface SidebarLinkGroupProps {
    onClick: () => void;
}

const SidebarLinkGroup = (sidebarLinkGroupProps: SidebarLinkGroupProps) => {
    const [renderIndex, setRenderIndex] = useState(0);
    const links = [
        { label: "خانه", link: ROUTES.HOME },
        { label: "ویرایش", link: ROUTES.EDIT },
        { label: "پیگیری", link: ROUTES.TRACKING },
        { label: "پرسشنامه ها", link: ROUTES.SURVEYS },
    ];
    const ref = useRef(null);

    useEffect(() => {
        let timer: number;
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    timer = setInterval(() => {
                        setRenderIndex((prevIndex) => prevIndex + 1);
                    }, 150); // Change delay here
                } else {
                    clearInterval(timer);
                }
            },
            { threshold: 1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (timer) {
                clearInterval(timer);
            }
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const handleOnClick = () => {
        sidebarLinkGroupProps.onClick();
    };

    return (
        <div ref={ref} className="flex flex-col w-full">
            {links.slice(0, renderIndex).map((link, index) => (
                <SidebarLink
                    key={index}
                    label={link.label}
                    link={link.link}
                    onClick={handleOnClick}
                    fadeDuration={500 * index}
                />
            ))}
        </div>
    );
};

export default SidebarLinkGroup;
