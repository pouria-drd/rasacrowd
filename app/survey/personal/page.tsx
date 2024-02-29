'use client';

import { BASE_URL } from "@/app/config";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import { useToast, ToastStatusEnum } from "@/app/components/Toast/ToastProvider";

import IdeaForm from "./forms/IdeaForm";
import StockForm from "./forms/StockForm";
import BazaarForm from "./forms/BazaarForm";
import ProduceFrom from "./forms/ProduceFrom";
import RegisterForm from "./forms/RegisterForm";
import InformationForm from "./forms/InformationForm";

import Alert from "@/app/components/alerts/Alert";
import SectionsManager from "@/app/components/mangers/SectionsManager";

interface PersonalPageProps {
    data?: PersonalProps;
    isEdit?: boolean;
}

const Personal = (props: PersonalPageProps) => {
    const router = useRouter();
    const { showToast } = useToast();

    const checkboxLabels = ["مشخصات", "ایده", "تولید", "بازار", "سرمایه", "ثبت"];

    const defaultDTO: PersonalProps = {
        agentAgeRange: '',
        agentDegree: '',
        agentFullName: '',
        agentPhoneNumber: '',
        captchaCode: '',
        captchaId: '',
        doneInvest: '',
        email: '',
        ideaDescription: '',
        ideaTitle: '',
        marketPoints: '',
        marketTarget: '',
        marketRivals: '',
        productPhase: '',
        requestedInvest: '',
    };

    const [trackingCode, setTrackingCode] = useState<string>('');
    const [dto, setDTO] = useState<PersonalProps>(props.data ?? defaultDTO);

    const handleOnDataChange = (key: keyof PersonalProps, value: string | undefined) => {
        setDTO((prevDTO) => {

            return {
                ...prevDTO, [key]: value
            };
        });
    }

    const handleRegister = async () => {
        try {
            const url = BASE_URL + `survery/Personal/${props.isEdit ? 'edit' : 'new'}`;

            const test = JSON.stringify(dto)

            const res = await fetch(url, {
                method: `${props.isEdit ? 'PUT' : 'POST'}`,
                body: test,
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await res.json();

            setTrackingCode(data.data);

            if (data.status) {
                showToast(data.message, ToastStatusEnum.Success)

                if (props.isEdit) {
                    router.push("/")
                }
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

                        <SectionsManager sections={sections} checkboxLabels={checkboxLabels}
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

export default Personal;


const Test = ({ trackingCode }: { trackingCode: string }) => {
    return (
        <div className="flex items-center justify-start gap-1 pr pr-2 w-full">
            <p>کد پیگیری شما</p>
            <p className="font-bold">{trackingCode}</p>
            <p>می باشد</p>
        </div>
    )
}
