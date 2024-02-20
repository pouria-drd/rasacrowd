'use client';

import { useState } from "react";
import Alert from "@/app/components/alerts/Alert";
import CheckboxGroup from "@/app/components/checkbox/CheckboxGroup";
import PersonalInformationForm from "./forms/PersonalInformationForm";

const Personal = () => {
    const checkboxLabels = ["مشخصات", "ایده", "تولید", "بازار", "سرمایه", "ثبت"]

    const [selectedCheckboxes, setSelectedCheckboxes] = useState<number>(0);

    const handleCheckboxSelection = (selectedIndexes: number) => {
        setSelectedCheckboxes(selectedIndexes);
    }

    return (
        <div className="flex flex-col gap-8 font-vazir">
            <Alert title="توجه!" type="info"
                message="درهنگام وارد کردن شماره تماس یا عبارت امنیتی، حتما از صفحه کلید انگلیسی استفاده کنید." />

            <div className="flex flex-col gap-6 pt-4 pb-6">
                <CheckboxGroup checkboxLabels={checkboxLabels} onSelectionChange={(idx) => handleCheckboxSelection(idx)} />

                {selectedCheckboxes === 0 && <PersonalInformationForm />}
                {selectedCheckboxes === 1 && <div>esjnhsrgfedhyh</div>}
            </div>
        </div>
    )
}

export default Personal