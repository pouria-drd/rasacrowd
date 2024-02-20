interface CheckboxProps {
    label: string;
    isSelected: boolean;
    onClick: () => void;
    isEnd?: boolean;
    isStart?: boolean;
}

const Checkbox = (props: CheckboxProps) => {
    const endLineCss = !props.isEnd && 'border-t';
    const startLineCss = !props.isStart && 'border-t';

    return (
        <div className={`flex flex-col items-center justify-center gap-2 font-vazir w-full`}>
            <div className="flex items-center justify-center w-full">
                <div className={`flex flex-grow ${startLineCss} border-gray-300`}></div>

                <button
                    onClick={props.onClick}
                    className={`${props.isSelected ? "bg-rasa-blue-800" : ""
                        } rounded-full border-2 border-rasa-blue-800 w-2 h-2 p-2`}>

                </button>

                <div className={`flex flex-grow ${endLineCss} border-gray-300`}></div>
            </div>

            <p onClick={props.onClick}
                className="text-gray-400 text-xs sm:text-sm cursor-pointer">
                {props.label}
            </p>
        </div>
    );
};

export default Checkbox;