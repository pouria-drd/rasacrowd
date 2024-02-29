'use client';

import { BASE_URL } from "../config";
import { ReactNode, useEffect, useState } from "react";
import { useToast, ToastStatusEnum } from "@/app/components/Toast/ToastProvider";

import Input from "../components/inputs/Input";
import Button from "../components/buttons/Button";
import Dropdown from "../components/dropdowns/Dropdown";

import Team from "../survey/team/page";
import Personal from "../survey/personal/page";
import Organization from "../survey/organization/page";

function Edit() {
    const { showToast } = useToast();

    const [page, setPage] = useState<ReactNode>();

    const [canSendData, setCanSendData] = useState<boolean>(false);
    const [uniqueID, setUniqueID] = useState<string | undefined>();
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>();

    const options: OptionProps[] = [
        { label: 'فردی', value: 'Personal' },
        { label: 'شرکت ها', value: 'Team' },
        { label: 'ادارات', value: 'Organisation' },
    ]

    const [selectedOption, setSelectedOption] = useState<OptionProps>(options[0]);

    const handleOnSelectOption = (option: OptionProps) => {
        setSelectedOption(option)
    }

    const handleEnter = async () => {
        console.log(phoneNumber, uniqueID)

        try {
            const url = BASE_URL + `Survery/${selectedOption.value}/find?phoneNumber=${phoneNumber}&uniqueid=${uniqueID}`;

            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await res.json();

            if (!res.ok) {
                showToast("پرسشنامه ای یافت نشد!", ToastStatusEnum.Error, "خطا")
            }
            else {
                setPage(handleData(data));
            }

        } catch (err: any) {
        }
    }


    const handleData = (data: any) => {
        switch (selectedOption.value) {
            case 'Personal':
                return <Personal data={data} isEdit={true} />
            case 'Team':
                return <Team data={data} isEdit={true} />
            case 'Organisation':
                return <Organization data={data} isEdit={true} />
        }
    }

    useEffect(() => {
        const value: boolean = (
            (phoneNumber && phoneNumber.length === 11) && (uniqueID && uniqueID.length === 13)
        ) as boolean

        setCanSendData(value)

    }, [phoneNumber, uniqueID]);

    if (page) {
        return page

    } else {
        return (
            <div className="font-vazir
            flex flex-col items-center justify-start gap-10 py-10">
                <p className="text-rasa-blue-800 r2l w-full">
                    برای ویرایش پرسشنامه مورد نظر، شماره تلفن همراه و کد پیگیری خود را وارد کنید.
                </p>

                <div className="flex flex-col items-center justify-center gap-6 w-full">
                    <Dropdown options={options} title="پرسشنامه" defaultOption={options[0]}
                        onSelectOption={(opt) => handleOnSelectOption(opt)} />

                    <Input placeHolder="شماره همراه" maxLength={11}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />

                    <Input placeHolder="کد پیگیری" maxLength={13}
                        onChange={(e) => setUniqueID(e.target.value)}
                    />
                </div>

                <div className="flex items-center justify-start w-full">
                    <Button onClick={handleEnter} type="primary" disabled={!canSendData}>
                        جست و جو
                    </Button>
                </div>
            </div>
        )
    }
}

export default Edit