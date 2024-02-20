const InfoIcon = ({ className = 'w-8 h-8' }: IconProps) => {
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
                stroke="#E7F8FC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17 21.3335H17.0121V21.3456H17V21.3335Z"
                stroke="#E7F8FC"
                strokeWidth="2.25"
                strokeLinejoin="round"
            />
            <path
                d="M17 18V12"
                stroke="#E7F8FC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default InfoIcon;
