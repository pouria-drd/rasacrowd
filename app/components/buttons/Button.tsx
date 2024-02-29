'use client';

import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
    type?: 'primary' | 'outline';
    disabled?: boolean;
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
            onClick={props.onClick} disabled={props.disabled}
            className={`${buttonStyle} disabled:cursor-not-allowed disabled:bg-opacity-70
            transition-all rounded-lg px-6 py-2 w-fit`}>

            {props.children}

        </button>
    );
};

export default Button;
