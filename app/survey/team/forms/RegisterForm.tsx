import Image from "next/image";
import CaptchaImage from "./captcha.png";
import Alert from "@/app/components/alerts/Alert";
import Input from "@/app/components/inputs/Input";
import RefreshIcon from "@/app/components/icons/RefreshIcon";

const RegisterForm = () => {

    const refreshCaptcha = async () => {
        console.log("Requested Captcha");
    };

    return (
        <div className="flex flex-col gap-20 pt-5">
            <Alert title="توجه" message="لطفا همه فیلد های الزامی را تکمیل کنید." type="error" />

            <div className="flex items-center justify-between gap-10">
                <div
                    className="bg-rasa-blue-25 
                        flex items-center justify-between
                        border rounded shadow p-2 w-2/5 h-12 gap-2">

                    <div className="w-full py-2">
                        <Image src={CaptchaImage} alt="CaptchaImage" className="w-[90%] h-9" />
                    </div>

                    <button onClick={refreshCaptcha} className="text-rasa-blue-800 w-fit p-1">
                        <RefreshIcon />
                    </button>
                </div>

                <Input placeHolder="عبارت امنیتی" maxLength={3} />
            </div>
        </div>
    )
}

export default RegisterForm