'use client';

import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
    disabled?: boolean;
    isBusy?: boolean;
    type?: 'primary' | 'outline';
}

const Button = (props: ButtonProps) => {
    const { type = 'primary' } = props;

    const buttonStyle = type ===
        'primary' ?
        'bg-rasa-blue-600 text-white'
        :
        'bg-rasa-blue-50 text-rasa-blue-600 hover:bg-rasa-blue-600 hover:text-white'

    return (
        <button
            onClick={props.onClick} disabled={props.disabled || props.isBusy}
            className={`${buttonStyle} 
            flex items-center justify-center gap-2
            disabled:cursor-not-allowed disabled:bg-opacity-70
            transition-all rounded-lg px-6 py-2 w-fit`}>

            {props.isBusy &&
                <span className="text-white border-white border-t rounded-full w-2 h-2 p-2 animate-spin">

                </span>
            }

            {props.children}
        </button>
    );
};

export default Button;
