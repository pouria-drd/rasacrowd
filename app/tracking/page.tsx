'use client';

import Input from "../components/inputs/Input";
import Button from "../components/buttons/Button";

const tracking = () => {
    return (
        <div className="font-vazir
            flex flex-col items-center justify-center gap-10 py-20">
            <Input placeHolder="کد پیگیری" />

            <div className="flex items-center justify-start w-full">
                <Button onClick={() => { }}>
                    پیگیری
                </Button>
            </div>
        </div>
    )
}

export default tracking
