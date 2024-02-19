'use client';
import { useEffect, useState, useId } from "react";


interface InputProps {
    label: string;
    hasError?: boolean;
    errorMessage?: string;
    type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
    value?: React.InputHTMLAttributes<HTMLInputElement>['value'];
    maxLength?: React.InputHTMLAttributes<HTMLInputElement>['maxLength'];

    getID?: (id: string) => void;
    onChange?: React.InputHTMLAttributes<HTMLInputElement>['onChange'];
}


const Input = ({ label, value, type = "text",
    hasError, maxLength, errorMessage, onChange, getID }: InputProps) => {

    const uniqueId = `feraitInput${useId()}`;
    const [hasValue, setHasValue] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>();

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(e);

        setHasValue(!!e.target.value);
    };

    useEffect(() => {
        if (errorMessage) {
            setErrorMsg(errorMessage);
        }
    }, [errorMessage]);

    useEffect(() => {
        if (getID) {
            getID(uniqueId);
        }
    }, [getID]);

    return (
        <div className="flex flex-col gap-1 font-vazir r2l">
            <div className="relative">
                <input
                    id={uniqueId}
                    type={type}
                    maxLength={maxLength}
                    value={value}
                    className={`bg-rasa-blue-25 appearance-none transition-all
                    outline-none focus:ring-0 
                    border-2 hover:border-rasa-blue-250 
                    text-sm text-gray-800
                    rounded-lg px-2.5 pb-2 pt-4 w-full r2l peer 
                    ${hasError ? 'border-red-300 focus:border-red-400'
                            : 'border-gray-300 focus:border-rasa-blue-250'
                        }`}
                    placeholder=" "
                    onChange={handleOnChange}
                />

                <label
                    htmlFor={uniqueId}
                    className={`absolute ${hasValue ? 'text-rasa-purple-400' : 'text-rasa-purple-100'}
                    bg-gradient-to-b 
                    from-transparent from-70%
                    to-rasa-blue-25 to-30%

                    duration-150 transform -translate-y-1/2 scale-75 origin-[0]  
                    -top-1 z-10 px-2 
                    peer-focus:px-2 peer-focus:text-rasa-purple-400 

                    peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
                   
                    peer-focus:-top-1

                    rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-10 -start-3`}>
                    {`${label}`}
                </label>
            </div>
            {
                hasError &&
                <p className="text-red-400 text-xs pr-1">
                    {errorMsg ? errorMessage : `فیلد ${label} اجباری است`}
                </p>
            }
        </div>
    )
}

export default Input