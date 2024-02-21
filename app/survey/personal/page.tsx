'use client';

import { ReactNode, useState } from "react";
import Alert from "@/app/components/alerts/Alert";
import CheckboxGroup from "@/app/components/checkbox/CheckboxGroup";

import IdeaForm from "./forms/IdeaForm";
import PersonalInformationForm from "./forms/PersonalInformationForm";

const Personal = () => {
    const checkboxLabels = ["مشخصات", "ایده", "تولید", "بازار", "سرمایه", "ثبت"];

    const sections: ReactNode[] = [
        <PersonalInformationForm />,
        <IdeaForm />
    ];

    const [selectedSection, setSelectedSection] = useState<ReactNode>(sections[0]);
    const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);

    const handleOnSelectionChange = (index: number) => {
        setSelectedSection(sections[index]);
        setCurrentSectionIndex(index);
    }

    const handleNextSelection = () => {
        const nextIndex = currentSectionIndex + 1;

        if (nextIndex < sections.length) {
            setSelectedSection(sections[nextIndex]);
            setCurrentSectionIndex(nextIndex);
        }
    }

    return (
        <div className="font-vazir
        flex flex-col gap-8 pb-10">
            <Alert
                title="توجه!"
                type="info"
                message="در هنگام وارد کردن شماره تماس یا عبارت امنیتی، حتما از صفحه کلید انگلیسی استفاده کنید."
            />

            <div className="flex flex-col gap-6 pt-4 pb-6">
                <CheckboxGroup
                    checkboxLabels={checkboxLabels}
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
        </div>
    );
};

export default Personal;
