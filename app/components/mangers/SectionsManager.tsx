'use client';

import { ReactNode, useState } from "react";
import CheckboxGroup from "../checkbox/CheckboxGroup";

interface SectionsManagerProps {
    sections: ReactNode[];
    checkboxLabels: string[];
}

const SectionsManager = (props: SectionsManagerProps) => {
    const [selectedSection, setSelectedSection] = useState<ReactNode>(props.sections[0]);
    const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);

    const handleOnSelectionChange = (index: number) => {
        setSelectedSection(props.sections[index]);
        setCurrentSectionIndex(index);
    }

    const handleNextSelection = () => {
        const nextIndex = currentSectionIndex + 1;

        if (nextIndex < props.sections.length) {
            setSelectedSection(props.sections[nextIndex]);
            setCurrentSectionIndex(nextIndex);
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

            <button
                onClick={handleNextSelection}
                className="bg-rasa-blue-600 text-white rounded-lg px-6 py-2 w-fit"
            >
                بعدی
            </button>
        </>
    )
}

export default SectionsManager
