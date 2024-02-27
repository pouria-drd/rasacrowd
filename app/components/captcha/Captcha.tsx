'use client';

import { BASE_URL } from "@/app/config";
import { useEffect, useState } from "react";

import Image from "next/image";
import RefreshIcon from "@/app/components/icons/RefreshIcon";

interface CaptchaProps {
    onDataChange: (field: string, value: string) => void;
}

const Captcha: React.FC<CaptchaProps> = ({ onDataChange }) => {
    const [captcha, setCaptcha] = useState<CaptchaResponse>({ captcha: '', id: '' });

    const requestCaptcha = async () => {
        try {
            const url = BASE_URL + "auth/captcha";
            const res = await fetch(url, { method: 'GET' });
            const data: CaptchaResponse = await res.json();
            setCaptcha(data);
            onDataChange('CaptchaId', data.id);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        requestCaptcha();
    }, []);

    return (
        <div className="flex items-center justify-between gap-10">
            <div className="bg-rasa-blue-25 
        flex items-center justify-between
        border rounded shadow p-2 w-2/5 h-12 gap-2">
                <div className="w-full py-2">
                    <Image
                        src={`data:image/*;base64,${captcha.captcha}`}
                        alt="CaptchaImage"
                        width={120}
                        height={40}
                    />
                </div>
                <button onClick={requestCaptcha} className="text-rasa-blue-800 w-fit p-1">
                    <RefreshIcon />
                </button>
            </div>
        </div>
    );
};

export default Captcha;
