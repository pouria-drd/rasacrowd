const ErrorIcon = ({ className = 'w-8 h-8' }: IconProps) => {
    return (
        <svg
            className={className}
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="17" cy="17" r="17" fill="currentColor" />
            <path
                d="M17 28C23.0751 28 28 23.0751 28 17C28 10.9249 23.0751 6 17 6C10.9249 6 6 10.9249 6 17C6 23.0751 10.9249 28 17 28Z"
                stroke="#FEECE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13 21L21 13M13 13L21 21"
                stroke="#FEECE3"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default ErrorIcon;
