'use client';

import { ReactNode, useState } from "react";

import Button from "../buttons/Button";
import CheckboxGroup from "../checkbox/CheckboxGroup";

interface SectionsManagerProps {
    children: ReactNode[];
    checkboxLabels: string[];
    isBusy: boolean;
    onRegister?: () => void;
    isOnLastForm?: () => void;
}

const SectionsManager = (props: SectionsManagerProps) => {
    const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
    const [selectedSection, setSelectedSection] = useState<ReactNode>(props.children[0]);

    const handleOnSelectionChange = (index: number) => {
        setSelectedSection(props.children[index]);
        setCurrentSectionIndex(index);

        if (props.isOnLastForm && index === props.children.length - 1) {
            props.isOnLastForm();
        }
    }

    const handleNextSelection = () => {
        const nextIndex = currentSectionIndex + 1;

        if (nextIndex <= props.children.length) {
            setSelectedSection(props.children[nextIndex]);
            setCurrentSectionIndex(nextIndex);
        }
    }

    const handlePreviousSelection = () => {
        const previousIndex = currentSectionIndex - 1;

        if (previousIndex >= 0) {
            setSelectedSection(props.children[previousIndex]);
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
                {currentSectionIndex < props.children.length - 1 ?
                    <Button onClick={handleNextSelection}>
                        بعدی
                    </Button> :
                    <Button onClick={handleRegister} isBusy={props.isBusy} >
                        ثبت
                    </Button>
                }

                {currentSectionIndex > 0 &&
                    <Button type="outline" onClick={handlePreviousSelection}>
                        قبلی
                    </Button>
                }
            </div>
        </>
    )
}

export default SectionsManager
