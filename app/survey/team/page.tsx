'use client';

import { BASE_URL } from "@/app/config";
import { ReactNode, useState } from "react";
import { useToast, ToastStatusEnum } from "@/app/components/Toast/ToastProvider";

import IdeaForm from "./forms/IdeaForm";
import StockForm from "./forms/StockForm";
import BazaarForm from "./forms/BazaarForm";
import ProduceFrom from "./forms/ProduceFrom";
import RegisterForm from "./forms/RegisterForm";
import Alert from "@/app/components/alerts/Alert";
import InformationForm from "./forms/InformationForm";
import SectionsManager from "@/app/components/mangers/SectionsManager";


const Team = () => {
    const { showToast } = useToast();
    const [trackingCode, setTrackingCode] = useState<string>('');

    const checkboxLabels = ["مشخصات", "ایده", "تولید", "بازار", "سرمایه", "ثبت"];

    const defaultDTO: TeamProps = {
        JobTitle: '',
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

    const [dto, setDTO] = useState<TeamProps>(defaultDTO);

    const handleOnDataChange = (key: keyof TeamProps, value: string | undefined) => {
        setDTO((prevDTO) => {

            return {
                ...prevDTO, [key]: value
            };
        });
    }


    const handleRegister = async () => {
        try {
            const url = BASE_URL + "survery/Team/new";

            const test = JSON.stringify(dto);

            console.log(test);

            const res = await fetch(url, {
                method: 'POST',
                body: test,
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await res.json();
            setTrackingCode(data.data);
            if (data.status) {
                showToast(data.message, ToastStatusEnum.Success)
            }
            else if (!data.status && data.message) {
                showToast(data.message, ToastStatusEnum.Error, "خطا")
            }

        } catch (err: any) {
        }
    }

    const sections: ReactNode[] = [
        <InformationForm data={dto} onDataChange={(k, v) => handleOnDataChange(k, v)} />,
        <IdeaForm data={dto} onDataChange={(k, v) => handleOnDataChange(k, v)} />,
        <ProduceFrom data={dto} onDataChange={(k, v) => handleOnDataChange(k, v)} />,
        <BazaarForm data={dto} onDataChange={(k, v) => handleOnDataChange(k, v)} />,
        <StockForm data={dto} onDataChange={(k, v) => handleOnDataChange(k, v)} />,
        <RegisterForm data={dto} onDataChange={(k, v) => handleOnDataChange(k, v)} />
    ];

    return (
        <div
            className="font-vazir
            flex flex-col gap-8 pb-10">
            {
                !trackingCode ?
                    <>
                        <Alert
                            title="توجه!"
                            type="info"
                            message="در هنگام وارد کردن شماره تماس یا عبارت امنیتی، حتما از صفحه کلید انگلیسی استفاده کنید."
                        />

                        <SectionsManager sections={sections}
                            checkboxLabels={checkboxLabels}
                            onRegister={handleRegister} />

                    </>
                    :
                    <div className="flex items-center justify-center w-full h-[50vh]">
                        <Alert title="عملیات موفقت آمیز بود" message={
                            <Test trackingCode={trackingCode} />
                        } type="success" />
                    </div>
            }
        </div>
    );
};

export default Team;

const Test = ({ trackingCode }: { trackingCode: string }) => {
    return (
        <div className="flex items-center justify-start gap-1 pr pr-2 w-full">
            <p>کد پیگیری شما</p>
            <p className="font-bold">{trackingCode}</p>
            <p>می باشد</p>
        </div>
    )
}
