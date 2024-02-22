'use client';

interface ButtonProps {
    text: string;
    onClick: () => void;
    type?: 'primary' | 'outline'
}

const Button = (props: ButtonProps) => {
    const { type = 'primary' } = props;

    const buttonStyle = type ===
        'primary' ?
        'bg-rasa-blue-600 text-white hover:bg-rasa-blue-50 hover:text-rasa-blue-600'
        :
        'bg-rasa-blue-50 text-rasa-blue-600 hover:bg-rasa-blue-600 hover:text-white'

    return (
        <button
            onClick={props.onClick}
            className={`${buttonStyle} transition-all rounded-lg px-6 py-2 w-fit`}>

            {props.text}

        </button>
    );
};

export default Button;
