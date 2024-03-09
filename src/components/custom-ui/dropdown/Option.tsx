interface DropdownOptionProps {
    option: OptionProps;
    isActive?: boolean;
    onClick: (option: OptionProps) => void;
}

const Option = (props: DropdownOptionProps) => {
    const { isActive = false } = props;

    const handleOptionClick = (opt: OptionProps) => {
        props.onClick(opt)
    }

    return (
        <div onClick={() => { handleOptionClick(props.option) }}
            className={`${isActive && 'bg-white text-gray-700'}
            hover:bg-white hover:text-gray-700 text-gray-500
            ${isActive && 'bg-white text-gray-700'} 
            transition-all cursor-pointer border-b border-gray-200/50
            rounded-md px-4 py-2 w-full r2l last:mb-5 last:border-none`}>

            {props.option.label}

        </div>
    )
}

export default Option