import { Link } from "react-router-dom";

import Badge from "./Badge";
import ArrowIcon from "./icons/ArrowIcon";

interface SurveyLinkCardProps {
    title: string;
    text: string;
    href: string;
    badgeColor?: "green" | "blue" | "orange";
}

const SurveyLinkCard = ({
    title,
    text,
    href,
    badgeColor = "green",
}: SurveyLinkCardProps) => {
    return (
        <Link
            to={href}
            className="bg-rasa-blue-50 font-vazir hover:shadow-md transition-all
        flex
        rounded-md w-full p-4">
            <div className="flex flex-col items-center justify-end gap-2 w-full">
                <div className="flex items-end justify-end gap-2 w-full">
                    <h3 className="text-base">{title}</h3>

                    <Badge badgeColor={badgeColor} />
                </div>

                <div className="w-full">
                    <p className="text-gray-500 text-sm r2l">{text}</p>
                </div>

                <div className="flex items-center text-rasa-blue-700 gap-1 w-full">
                    <ArrowIcon />
                    <p>مشاهده</p>
                </div>
            </div>
        </Link>
    );
};

export default SurveyLinkCard;
