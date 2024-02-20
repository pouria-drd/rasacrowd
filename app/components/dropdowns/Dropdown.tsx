'use client';

import Option from "./Option";
import ArrowUpIcon from './icons/ArrowUpIcon';
import { useEffect, useRef, useState } from "react";


/**
 * Props interface for the Dropdown component
 */
interface DropdownProps {
    title: string; // Title for the dropdown
    options: OptionProps[]; // Array of dropdown options
    defaultOption?: OptionProps; // Default selected option
    onSelectOption?: (option: OptionProps) => void; // Callback function when an option is selected
}

export const Dropdown = ({ title, options, defaultOption, onSelectOption }: DropdownProps) => {
    // State to track the dropdown's visibility.
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // State to track the currently selected option
    const [selectedOption, setSelectedOption] =
        useState<OptionProps | null>(defaultOption || null);

    // State to track the height of the dropdown content.
    const [contentHeight, setContentHeight] = useState<number>(0);

    // Reference to the DOM element representing the dropdown content.
    const contentRef = useRef<HTMLDivElement | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Handler to toggle the visibility of the dropdown.
    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    // Handler when an option is clicked
    const handleOptionClick = (option: OptionProps) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    // Effect to update the content height when the dropdown is active.
    useEffect(() => {
        if (isOpen && contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        } else {
            setContentHeight(0);
        }
    }, [isOpen]);

    // Handler to close dropdown when clicked outside of it.
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && event.target instanceof Node && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    // Effect to handle click events outside the dropdown
    useEffect(() => {
        // Add a click event listener to the document when the component mounts
        document.addEventListener('click', handleClickOutside);

        // Clean up the event listener when the component is unmounted
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []); // Empty dependency array ensures the effect runs only once on mount


    return (
        <div ref={dropdownRef} className="flex flex-col gap-2 
        relative font-vazir">
            <div onClick={handleOpen}
                onBlur={() => { setIsOpen(false) }}
                className={`bg-rasa-blue-25 transition-all cursor-pointer
                flex items-center justify-between group
                rounded-lg border-2 hover:border-rasa-blue-250 
                px-4 py-3 ${isOpen && 'border-rasa-blue-250'}`}>

                <ArrowUpIcon className={`${!isOpen && 'rotate-180'} w-4 h-2`} />

                <span
                    className={`absolute -top-[14px] right-5
                    cursor-pointer bg-gradient-to-b 
                    from-transparent from-50%
                    to-rasa-blue-25 to-50%
                    px-2 group-hover:text-rasa-purple-400
                    ${isOpen ? 'text-rasa-purple-400' : 'text-rasa-purple-100'} `}>
                    {title}
                </span>

                <span className={`${selectedOption ?
                    'text-gray-800' : 'text-rasa-purple-100'}`}>
                    {selectedOption ? selectedOption.label : 'انتخاب کنید'}
                </span>
            </div>

            <div id="dropdown-content"
                ref={contentRef}
                style={{ height: isOpen ? `${contentHeight}px` : '0' }}
                className={`bg-rasa-blue-25 transition-all
                    flex flex-col 
                    rounded-md overflow-hidden
                    px-4 ${isOpen ? 'border-2 pt-2 pb-3 mb-2' : ''}`}>

                {
                    options.map((opt, idx) => (
                        <Option onClick={(option) => { handleOptionClick(option) }}
                            option={opt} key={idx} />
                    ))
                }
            </div>
        </div>
    )
}
