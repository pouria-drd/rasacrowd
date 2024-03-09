'use client';

import { useEffect, useState, useId } from "react";

interface InputProps {
    placeHolder: string;
    hasError?: boolean;
    errorMessage?: string;
    value?: React.InputHTMLAttributes<HTMLTextAreaElement>['value'];
    defaultValue?: React.InputHTMLAttributes<HTMLTextAreaElement>['defaultValue'];
    maxLength?: React.InputHTMLAttributes<HTMLTextAreaElement>['maxLength'];

    getID?: (id: string) => void;
    onChange?: React.InputHTMLAttributes<HTMLTextAreaElement>['onChange'];
}


const TextArea = ({ placeHolder, value, defaultValue,
    hasError, maxLength, errorMessage, onChange, getID }: InputProps) => {

    const uniqueId = `feraitInput${useId()}`;
    const [hasValue, setHasValue] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>();

    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) onChange(e);

        setHasValue(!!e.target.value || !!e.target.defaultValue);
    };

    useEffect(() => {
        if (errorMessage) {
            setErrorMsg(errorMessage);
        }
    }, [errorMessage]);

    useEffect(() => {
        if (defaultValue) {
            setHasValue(true);
        }
    }, [defaultValue]);

    useEffect(() => {
        if (getID) {
            getID(uniqueId);
        }
    }, [getID]);

    return (
        <div className="flex flex-col gap-1 font-vazir r2l">
            <div className="relative">
                <textarea
                    id={uniqueId}
                    maxLength={maxLength}
                    value={value} defaultValue={defaultValue}
                    className={`bg-rasa-blue-25 appearance-none text-justify
                    outline-none focus:ring-0 
                    border-2 hover:border-rasa-blue-250 
                    text-gray-800
                    rounded-lg px-2.5 pb-2 pt-4 w-full min-h-32 max-h-60 r2l peer 
                    ${hasError ? 'border-red-300 focus:border-red-400'
                            : 'border-gray-300 focus:border-rasa-blue-250'
                        }`}
                    placeholder=" "
                    onChange={handleOnChange}
                />

                <label
                    htmlFor={uniqueId}
                    className={`absolute 
                    ${hasValue ? 'text-rasa-purple-400' : 'text-rasa-purple-100'}
                    bg-gradient-to-b 
                    from-transparent from-65%
                    to-rasa-blue-25 to-35%

                    duration-150 transform -translate-y-1/2 
                    -top-1 right-3 z-10 px-2
                    peer-focus:px-2 peer-focus:text-rasa-purple-400 

                    peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
                   
                    peer-focus:-top-1

                    rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-10 -start-3`}>
                    {`${placeHolder}`}
                </label>
            </div>
            {
                hasError &&
                <p className="text-red-400 text-xs pr-1">
                    {errorMsg ? errorMessage : `فیلد ${placeHolder} اجباری است`}
                </p>
            }
        </div>
    )
}

export default TextArea