import { BASE_URL } from "../../../config";
import { useNavigate } from "react-router-dom";
import { ReactNode, useEffect, useState } from "react";
import { useToast, ToastStatusEnum } from "../../../components/custom-ui/toast/ToastProvider";


import ContactForm from "./forms/ContactForm";
import RegisterForm from "./forms/RegisterForm";
import ServiceInformation from "./forms/ServiceInformation";

import Alert from "../../../components/custom-ui/alert/Alert";
import BaseCard from "../../../components/custom-ui/card/BaseCard";
import SectionsManager from "../../../components/mangers/SectionsManager";

interface ServicePageProps {
    data?: ServiceProps;
    isEdit?: boolean;
}

function ServicePage(props: ServicePageProps) {

    const router = useNavigate();

    const { showToast } = useToast();
    const [isDataEmpty, setIsDataEmpty] = useState<boolean>(false);
    const [isOnLastForm, setIsOnLastForm] = useState<boolean>(false);
    const [isSendingData, setIsSendingData] = useState<boolean>(false);

    const checkboxLabels = ["مشخصات", "راه های", "ثبت"];

    const defaultDTO: ServiceProps = {
        serviceTitle: "",
        category: "",
        agentPhoneNumber: "",
        description: "",
        email: "",
        site: "",
        captchaId: "",
        captchaCode: "",
        address: ""
    };

    const [trackingCode, setTrackingCode] = useState<string>('');
    const [dto, setDTO] = useState<ServiceProps>(props.data ?? defaultDTO);

    const handleOnDataChange = (key: keyof ServiceProps, value: string | undefined) => {
        setDTO((prevDTO) => {

            return {
                ...prevDTO, [key]: value
            };
        });
    }

    const handleRegister = async () => {
        setIsSendingData(true);

        try {
            const url = BASE_URL + `survery/Service/${props.isEdit ? 'edit' : 'new'}`;

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
                    router("/")
                }
            }
            else if (!data.status && data.message) {
                showToast(data.message, ToastStatusEnum.Error, "خطا")
            }

        } catch (err: any) {
        }

        setIsSendingData(false);
    }

    const sections: ReactNode[] = [
        <ServiceInformation data={dto} onDataChange={(k, v) => handleOnDataChange(k, v)} key={0} />,
        <ContactForm data={dto} onDataChange={(k, v) => handleOnDataChange(k, v)} key={1} />,
        <RegisterForm data={dto} onDataChange={(k, v) => handleOnDataChange(k, v)} key={2} />
    ];

    useEffect(() => {
        // Check if any required field in dto is empty
        const isEmpty = Object.values(dto).some(value => value === '' || value === undefined);
        setIsDataEmpty(isEmpty);
    }, [dto]);

    return (
        <BaseCard>
            <div
                className="font-vazir
            flex flex-col gap-8 pb-10 w-full">

                {
                    !trackingCode ?

                        <>
                            <Alert
                                isClosable={true}
                                title="توجه!"
                                type="info"
                                message="در هنگام وارد کردن شماره تماس یا عبارت امنیتی، حتما از صفحه کلید انگلیسی استفاده کنید."
                            />

                            {
                                isDataEmpty && isOnLastForm &&
                                <Alert title="توجه" message="لطفا همه فیلد های الزامی را تکمیل کنید." type="error" />
                            }

                            <SectionsManager
                                isBusy={isSendingData}
                                onRegister={handleRegister}
                                checkboxLabels={checkboxLabels}
                                isOnLastForm={() => setIsOnLastForm(true)}
                            >
                                {sections}
                            </SectionsManager>
                        </>

                        :

                        <div className="flex items-center justify-center w-full h-[50vh]">
                            <Alert title="عملیات موفقت آمیز بود" message={
                                <Test trackingCode={trackingCode} />
                            } type="success" />
                        </div>
                }
            </div>
        </BaseCard>
    );
}

export default ServicePage

const Test = ({ trackingCode }: { trackingCode: string }) => {
    return (
        <div className="flex items-center justify-start gap-1 pr pr-2 w-full">
            <p>کد پیگیری شما</p>
            <p className="font-bold">{trackingCode}</p>
            <p>می باشد</p>
        </div>
    )
}
