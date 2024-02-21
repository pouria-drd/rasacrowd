'use client';

import { useEffect, useState } from "react";
import Checkbox from "./inputs/Checkbox";

interface OptionsSelectorProps {
    title: string;
    default: string;
    options: string[];
    onChange: (label: string) => void;
}

const OptionsSelector = (props: OptionsSelectorProps) => {
    const [selectedCheckbox, setSelectedCheckbox] = useState<string | null | undefined>(null);

    useEffect(() => {
        if (props.default) {
            setSelectedCheckbox(props.options.find(x => x === props.default))
        }
    }, [props.default])

    const handleCheckboxChange = (label: string) => {
        setSelectedCheckbox(label);
        props.onChange(label);
    };

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-end gap-2 px-1 font-vazir">
                <h2 className="text-rasa-blue-800 text-lg sm:text-xl cursor-default">
                    {props.title}
                </h2>

                <span className="bg-rasa-orange-500 w-3 h-3 rounded-full p-1">

                </span>
            </div>

            <div className="flex flex-col items-center justify-start gap-2 px-1">

                {props.options.map((label) => (
                    <Checkbox
                        key={label}
                        label={label}
                        checked={selectedCheckbox === label}
                        onChange={() => handleCheckboxChange(label)}
                    />
                ))}

            </div>
        </div>
    )
}

export default OptionsSelector