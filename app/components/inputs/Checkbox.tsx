import { useId } from "react";
import TickIcon from "../icons/TickIcon";

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: () => void;
}

const Checkbox = (props: CheckboxProps) => {
    const uniqueId = `feraitCheckbox${useId()}`;

    return (
        <div className="font-vazir
            flex items-center justify-end gap-2 w-full">

            <label htmlFor={uniqueId} className="cursor-pointer">
                {props.label}
            </label>

            <input
                type="checkbox"
                name={uniqueId}
                id={uniqueId}
                checked={props.checked}
                onChange={props.onChange}
                className="appearance-none border border-rasa-blue-300 peer relative cursor-pointer
                rounded-full bg-white mt-1 w-5 h-5"
            />

            <TickIcon className="absolute text-rasa-blue-800
            w-3 h-3 mt-[6px] mr-1
            hidden peer-checked:block" />
        </div>
    );
};

export default Checkbox;
