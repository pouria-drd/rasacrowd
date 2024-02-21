'use client';

import { ReactNode, useState } from "react";
import Alert from "@/app/components/alerts/Alert";

import IdeaForm from "./forms/IdeaForm";
import StockForm from "./forms/StockForm";
import BazaarForm from "./forms/BazaarForm";
import ProduceFrom from "./forms/ProduceFrom";
import PersonalInformationForm from "./forms/PersonalInformationForm";
import SectionsManager from "@/app/components/mangers/SectionsManager";


const Personal = () => {
    const checkboxLabels = ["مشخصات", "ایده", "تولید", "بازار", "سرمایه", "ثبت"];

    const defaultDTO: PersonalProps = {
        AgentAgeRange: '',
        AgentDegree: '',
        AgentFullName: '',
        AgentPhoneNumber: '',
        CaptchaCode: '',
        CaptchaId: '',
        DoneInvest: '',
        Email: '',
        IdeaDescription: '',
        IdeaTitle: '',
        MarketPoints: '',
        MarketTarget: '',
        MarketRivals: '',
        ProductPhase: '',
        RequestedInvest: '',
    };

    const [dto, setDTO] = useState<PersonalProps>(defaultDTO);

    const handleOnDataChange = (key: keyof PersonalProps, value: string | undefined) => {
        setDTO((prevDTO) => {

            return {
                ...prevDTO, [key]: value
            };
        });
    }

    const sections: ReactNode[] = [
        <PersonalInformationForm data={dto} onDataChange={(k, v) => handleOnDataChange(k, v)} />,
        <IdeaForm data={dto} onDataChange={(k, v) => handleOnDataChange(k, v)} />,
        <ProduceFrom data={dto} onDataChange={(k, v) => handleOnDataChange(k, v)} />,
        <BazaarForm data={dto} onDataChange={(k, v) => handleOnDataChange(k, v)} />,
        <StockForm data={dto} onDataChange={(k, v) => handleOnDataChange(k, v)} />,
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
