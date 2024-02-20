import InfoIcon from "./icons/InfoIcon";
import ErrorIcon from "./icons/ErrorIcon";
import SuccessIcon from "./icons/SuccessIcon";
import WarningIcon from "./icons/WarningIcon";

interface AlertProps {
    title: string;
    type: 'info' | 'success' | 'error' | 'warning';
}

interface cardColorsProps {
    type: 'bg' | 'border' | 'text';
    color: string;
}

interface cardTypeProps {
    type: 'info' | 'success' | 'error' | 'warning';
    colors: cardColorsProps[];
}

const Alert = (props: AlertProps) => {
    const { type = 'info' } = props;

    const icons = {
        'info': <InfoIcon />,
        'error': <ErrorIcon />,
        'success': <SuccessIcon />,
        'warning': <WarningIcon />
    }

    const cardColors: cardTypeProps[] = [
        {
            type: "info", colors: [
                { type: "bg", color: 'bg-rasa-blue-200' },
                { type: "border", color: 'border-rasa-blue-300' },
                { type: "text", color: 'text-rasa-blue-600' },
            ],
        },
        {
            type: "success", colors: [
                { type: "bg", color: 'bg-rasa-green-200' },
                { type: "border", color: 'border-rasa-green-600' },
                { type: "text", color: 'text-rasa-green-600' },
            ],
        },
        {
            type: "error", colors: [
                { type: "bg", color: 'bg-rasa-red-200' },
                { type: "border", color: 'border-rasa-red-400' },
                { type: "text", color: 'text-rasa-red-400' },
            ],
        },
        {
            type: "warning", colors: [
                { type: "bg", color: 'bg-rasa-orange-200' },
                { type: "border", color: 'border-orange-400' },
                { type: "text", color: 'text-orange-400' },
            ],
        }
    ]

    const handleIcon = () => {
        return icons[props.type];
    }

    const handleColor = (type: 'bg' | 'border' | 'text') => {
        const relatedType = cardColors.find(x => x.type === props.type);

        if (relatedType) {
            return relatedType.colors.find(x => x.type === type)?.color;
        }
    }

    return (
        <div
            className={`font-vazir border
            ${handleColor('bg')} ${handleColor("border")}
            flex flex-row-reverse items-center justify-end
            rounded-3xl shadow px-6 py-5 my-4`}>

            <div className="grid items-center grid-cols-12 w-full text-right r2l">
                <div className={`flex items-center w-full h-full ${handleColor("text")}`}>
                    {handleIcon()}
                </div>

                <h3 className="text-lg text-rasa-blue-800 col-span-11">
                    {props.title}
                </h3>

                <p className="text-sm text-gray-500 col-span-11 col-start-2">
                    sdjfheuijdfoklrfkejgfi
                </p>
            </div>
        </div>
    )
}

export default Alert