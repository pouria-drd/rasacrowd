import Link from "next/link"
import ArrowIcon from "./icons/ArrowIcon";

interface SurveyLinkCardProps {
    title: string;
    text: string;
    badgeColor?: 'green' | 'blue' | 'orange';
}

const SurveyLinkCard = ({ title, text, badgeColor = 'green' }: SurveyLinkCardProps) => {
    const cardLineColors = {
        'green': "bg-rasa-green-800",
        'blue': "bg-rasa-blue-800",
        'orange': "bg-rasa-orange-800",
    }

    return (
        <Link href={""} className="bg-rasa-blue-100 font-vazir hover:shadow-md transition-all
        flex
        rounded-md w-full p-4">

            <div className="flex flex-col items-center justify-end gap-2 w-full">
                <div className="flex items-end justify-end gap-2 w-full">
                    <h3 className="text-base">
                        {title}
                    </h3>

                    <span className={`${cardLineColors[badgeColor]} rounded-sm w-1 h-8 p-[2px]`}>
                    </span>
                </div>

                <div className="w-full">
                    <p className="text-gray-500 text-sm r2l">
                        {text}
                    </p>
                </div>

                <div className="flex items-center text-rasa-blue-700 gap-1 w-full">
                    <ArrowIcon />
                    <p>
                        مشاهده
                    </p>
                </div>
            </div>

        </Link>
    )
}

export default SurveyLinkCard