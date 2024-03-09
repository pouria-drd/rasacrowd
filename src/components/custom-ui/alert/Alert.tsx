'use client';

import { ReactNode, useState } from "react";

import InfoIcon from "./icons/InfoIcon";
import ErrorIcon from "./icons/ErrorIcon";
import CloseIcon from "./icons/CloseIcon";
import SuccessIcon from "./icons/SuccessIcon";
import WarningIcon from "./icons/WarningIcon";

interface AlertProps {
    title: string;
    message: ReactNode | string;
    type: 'info' | 'success' | 'error' | 'warning';
    isClosable?: boolean;
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
    const [isOpen, setIsOpen] = useState<boolean>(true);

    // const { type = 'info' } = props;

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
            className={`${isOpen ? 'block' : 'hidden'}
            font-vazir border cursor-default relative
            ${handleColor('bg')} ${handleColor("border")}
            flex flex-row-reverse items-center justify-end
            rounded-3xl shadow px-6 py-5`}>

            {props.isClosable &&
                <button onClick={() => setIsOpen(false)}
                    className={`${handleColor("text")} absolute top-4 left-5`}>
                    <CloseIcon />
                </button>
            }

            <div className="grid items-center grid-cols-12 w-full text-right r2l">
                <div className={`flex items-center w-full h-full ${handleColor("text")}`}>
                    {handleIcon()}
                </div>

                <h3 className="text-lg text-rasa-blue-800 mr-2 sm:mr-0 col-span-10 pr-2">
                    {props.title}
                </h3>

                <div className="text-sm text-gray-500 col-span-11 col-start-2 mr-2 sm:mr-0">
                    {props.message}
                </div>
            </div>
        </div>
    )
}

export default Alert