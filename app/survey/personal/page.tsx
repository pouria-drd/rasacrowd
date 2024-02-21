import { ReactNode } from "react";
import Alert from "@/app/components/alerts/Alert";

import IdeaForm from "./forms/IdeaForm";
import ProduceFrom from "./forms/ProduceFrom";
import PersonalInformationForm from "./forms/PersonalInformationForm";
import SectionsManager from "@/app/components/mangers/SectionsManager";

const Personal = () => {
    const checkboxLabels = ["مشخصات", "ایده", "تولید", "بازار", "سرمایه", "ثبت"];

    const sections: ReactNode[] = [
        <PersonalInformationForm />,
        <IdeaForm />,
        <ProduceFrom />
    ];

    return (
        <div
            className="font-vazir
            flex flex-col gap-8 pb-10">

            <Alert
                title="توجه!"
                type="info"
                message="در هنگام وارد کردن شماره تماس یا عبارت امنیتی، حتما از صفحه کلید انگلیسی استفاده کنید."
            />

            <SectionsManager sections={sections} checkboxLabels={checkboxLabels} />
        </div>
    );
};

export default Personal;
