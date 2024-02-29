'use client';

import { BASE_URL } from "@/app/config";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { useToast, ToastStatusEnum } from "@/app/components/Toast/ToastProvider";

import Alert from "@/app/components/alerts/Alert";
import SectionsManager from "@/app/components/mangers/SectionsManager";

import AssetForm from "./forms/AssetForm";
import ProfitForm from "./forms/ProfitForm";
import ProjectForm from "./forms/ProjectForm";
import RegisterForm from "./forms/RegisterForm";
import InformationForm from "./forms/InformationForm";

interface OrganizationPageProps {
  data?: OrganizationProps;
  isEdit?: boolean;
}

const Organization = (props: OrganizationPageProps) => {
  const router = useRouter();

  const { showToast } = useToast();
  const [isDataEmpty, setIsDataEmpty] = useState<boolean>(false);
  const [isOnLastForm, setIsOnLastForm] = useState<boolean>(false);

  const [trackingCode, setTrackingCode] = useState<string>('');

  const checkboxLabels = ["مشخصات", "طرح", "ذی نفعان", "سرمایه", "ثبت"];

  const defaultDTO: OrganizationProps = {
    agentPhoneNumber: '',
    captchaCode: '',
    captchaId: '',
    doneInvest: '',
    ideaDescription: '',
    ideaTitle: '',
    requestedInvest: '',
    investProfit: '',
    officeBoss: '',
    officeName: '',
    publicProfit: '',
    selfProfit: '',
    yektaCode: '',
  };

  const [dto, setDTO] = useState<OrganizationProps>(props.data ?? defaultDTO);

  const handleOnDataChange = (key: keyof OrganizationProps, value: string | undefined) => {
    setDTO((prevDTO) => {

      return {
        ...prevDTO, [key]: value
      };
    });
  };

  const handleRegister = async () => {
    try {
      const url = BASE_URL + `survery/Organisation/${props.isEdit ? 'edit' : 'new'}`;

      const test = JSON.stringify(dto);

      console.log(test);

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
        showToast(data.message, ToastStatusEnum.Success);

        if (props.isEdit) {
          router.push("/")
        }
      }
      else if (!data.status && data.message) {
        showToast(data.message, ToastStatusEnum.Error, "خطا");
      }

    } catch (err: any) {
    }
  }

  const sections: ReactNode[] = [
    <InformationForm data={dto} onDataChange={(k, v) => handleOnDataChange(k, v)} />,
    <ProjectForm data={dto} onDataChange={(k, v) => handleOnDataChange(k, v)} />,
    <ProfitForm data={dto} onDataChange={(k, v) => handleOnDataChange(k, v)} />,
    <AssetForm data={dto} onDataChange={(k, v) => handleOnDataChange(k, v)} />,
    <RegisterForm data={dto} onDataChange={(k, v) => handleOnDataChange(k, v)} />,
  ];

  useEffect(() => {
    // Check if any required field in dto is empty
    const isEmpty = Object.values(dto).some(value => value === '' || value === undefined);
    setIsDataEmpty(isEmpty);
  }, [dto]);

  return (
    <div
      className="font-vazir
    flex flex-col gap-8 pb-10">
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
              sections={sections}
              onRegister={handleRegister}
              checkboxLabels={checkboxLabels}
              isOnLastForm={() => setIsOnLastForm(true)}
            />

          </>
          :
          <div className="flex items-center justify-center w-full h-[50vh]">
            <Alert title="عملیات موفقت آمیز بود" message={
              <Test trackingCode={trackingCode} />
            } type="success" />
          </div>
      }
    </div>
  )
}

export default Organization


const Test = ({ trackingCode }: { trackingCode: string }) => {
  return (
    <div className="flex items-center justify-start gap-1 pr pr-2 w-full">
      <p>کد پیگیری شما</p>
      <p className="font-bold">{trackingCode}</p>
      <p>می باشد</p>
    </div>
  )
}
