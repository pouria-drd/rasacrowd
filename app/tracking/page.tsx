'use client';

import { useState } from "react";
import { BASE_URL } from "../config";
import { useToast, ToastStatusEnum } from "../components/Toast/ToastProvider";

import Input from "../components/inputs/Input";
import Button from "../components/buttons/Button";
import TrackingStatusCard from "../components/TrackingStatusCard";

const tracking = () => {
    const { showToast } = useToast();
    const [trackingCode, setTrackingCode] = useState<string>();
    const [isSendingData, setIsSendingData] = useState<boolean>(false);
    const [type, setType] = useState<"شرکت ها" | "ادارات" | "فردی">();

    const handleTracking = async () => {
        setType(undefined);
        setIsSendingData(true);
        try {
            const url = BASE_URL + `Survery/Track?trackinCode=${trackingCode}`;

            const res = await fetch(url, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await res.json();

            if (data.type) {
                switch (data.type) {
                    case 'personal':
                        setType('فردی')
                        break;

                    case 'team':
                        setType('شرکت ها')
                        break;

                    case 'organazation':
                        setType('ادارات')
                        break;
                }
            }

            if (!res.ok) {
                showToast("پرسشنامه ای یافت نشد!", ToastStatusEnum.Error, "خطا")
            }

            setIsSendingData(false);
        } catch (err: any) {
        }
    }

    return (
        <div className="font-vazir px-0 sm:px-20
            flex flex-col items-center justify-center gap-10 py-20">

            <Input maxLength={13} type="tel" placeHolder="کد پیگیری" onChange={(e) => setTrackingCode(e.target.value)} />

            <div className="flex items-center justify-start w-full">
                <Button onClick={handleTracking} disabled={!trackingCode} isBusy={isSendingData}>
                    پیگیری
                </Button>
            </div>

            {type &&
                <TrackingStatusCard type={type} />
            }
        </div>
    )
}

export default tracking
