import { BASE_URL } from "@/app/config";
import { useEffect, useState } from "react";
import {
  useToast,
  ToastStatusEnum,
} from "@/app/components/Toast/ToastProvider";
import {
  OrganizationFormProps,
  handleOnOrganizationDataChange,
} from "@/app/utils/formUtils";

import Image from "next/image";
import Input from "@/app/components/inputs/Input";
import RefreshIcon from "@/app/components/icons/RefreshIcon";

const RegisterForm = (props: OrganizationFormProps) => {
  const { showToast } = useToast();
  const [captcha, setCaptcha] = useState<CaptchaResponse>({
    captcha: "",
    id: "",
  });

  const requestCaptcha = async () => {
    try {
      const url = BASE_URL + "auth/captcha";

      const res = await fetch(url, { method: "GET" });

      const data = await res.json();

      setCaptcha(data);
      handleOnOrganizationDataChange(props, "captchaId", data.id);

      if (data.message) {
        showToast(data.message, ToastStatusEnum.Error, "خطا");
      }
    } catch (err: any) {}
  };

  useEffect(() => {
    requestCaptcha();
    console.log("props.getCaptcha");
  }, []);

  return (
    <div className="flex flex-col gap-20 pt-5">
      <div className="flex items-center justify-between gap-10">
        <div
          className="bg-rasa-blue-25 
                flex items-center justify-between
                border rounded shadow p-2 w-full sm:w-2/5 h-12 gap-2"
        >
          <div className="w-full py-2">
            <Image
              className="w-full h-10"
              src={`data:image/*;base64,${captcha.captcha}`}
              alt="CaptchaImage"
              width={10}
              height={10}
            />
          </div>
          <button
            onClick={requestCaptcha}
            className="text-rasa-blue-800 w-fit p-1"
          >
            <RefreshIcon />
          </button>
        </div>
        <Input
          placeHolder="عبارت امنیتی"
          maxLength={3}
          defaultValue={props.data.captchaCode}
          onChange={(e) =>
            handleOnOrganizationDataChange(props, "captchaCode", e.target.value)
          }
        />
      </div>
    </div>
  );
};

export default RegisterForm;
