'use client';

import { ReactNode, useState } from "react";

import Button from "../buttons/Button";
import CheckboxGroup from "../checkbox/CheckboxGroup";

interface SectionsManagerProps {
    sections: ReactNode[];
    checkboxLabels: string[];
    onRegister?: () => void;
    isOnLastForm?: () => void;
}

const SectionsManager = (props: SectionsManagerProps) => {
    const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
    const [selectedSection, setSelectedSection] = useState<ReactNode>(props.sections[0]);

    const handleOnSelectionChange = (index: number) => {
        setSelectedSection(props.sections[index]);
        setCurrentSectionIndex(index);

        if (props.isOnLastForm && index === props.sections.length - 1) {
            props.isOnLastForm();
        }
    }

    const handleNextSelection = () => {
        const nextIndex = currentSectionIndex + 1;

        if (nextIndex <= props.sections.length) {
            setSelectedSection(props.sections[nextIndex]);
            setCurrentSectionIndex(nextIndex);
        }
    }

    const handlePreviousSelection = () => {
        const previousIndex = currentSectionIndex - 1;

        if (previousIndex >= 0) {
            setSelectedSection(props.sections[previousIndex]);
            setCurrentSectionIndex(previousIndex);
        }
    }

    const handleRegister = () => {
        if (props.onRegister) {
            console.log("onRegister");
            props.onRegister();
        }
    }

    return (
        <>
            <div className="flex flex-col gap-6 pt-4 pb-6">
                <CheckboxGroup
                    checkboxLabels={props.checkboxLabels}
                    selectedIndex={currentSectionIndex}
                    onSelectionChange={(idx) => handleOnSelectionChange(idx)}
                />

                {selectedSection}
            </div>

            <div className="flex items-center justify-between">
                {currentSectionIndex < props.sections.length - 1 ?
                    <Button children="بعدی" onClick={handleNextSelection} /> :
                    <Button children="ثبت" onClick={handleRegister} />
                }

                {currentSectionIndex > 0 &&
                    <Button children="قبلی" type="outline" onClick={handlePreviousSelection} />
                }
            </div>
        </>
    )
}

export default SectionsManager
