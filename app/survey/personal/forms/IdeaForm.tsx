'use client';

import { useEffect } from "react";
import Input from "@/app/components/inputs/Input";
import SectionTitle from "../../components/SectionTitle";
import TextArea from "@/app/components/inputs/TextArea";

interface IdeaForm {
    data: PersonalProps;
    onDataChange: (key: keyof PersonalProps, value: string | undefined) => void;
}

const IdeaForm = (props: IdeaForm) => {
    const handleOnDataChange = (key: keyof PersonalProps, value: string | undefined) => {
        props.onDataChange(key, value);
    }

    // useEffect(() => {

    // }, [props.data.IdeaTitle, props.data.IdeaDescription])

    return (
        <>
            <SectionTitle title="شرح ایده" />

            <Input placeHolder="عنوان ایده" defaultValue={(props.data.IdeaTitle)}
                onChange={(e) => handleOnDataChange('IdeaTitle', e.target.value)} />

            <TextArea placeHolder="خلاصه ایده" defaultValue={props.data.IdeaDescription} maxLength={421}
                onChange={(e) => handleOnDataChange('IdeaDescription', e.target.value)} />
        </>
    )
}

export default IdeaForm