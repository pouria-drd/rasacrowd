import React from "react";
import Input from "@/app/components/inputs/Input";
import TextArea from "@/app/components/inputs/TextArea";
import SectionTitle from "../../components/SectionTitle";
import { handleOnDataChange, FormProps } from "../../../utils/formUtils";

const IdeaForm = (props: FormProps) => {
    return (
        <>
            <SectionTitle title="شرح ایده" />

            <Input
                placeHolder="عنوان طرح"
                defaultValue={props.data.IdeaTitle}
                onChange={(e) => handleOnDataChange(props, 'IdeaTitle', e.target.value)}
            />

            <TextArea
                placeHolder="خلاصه طرح"
                defaultValue={props.data.IdeaDescription}
                maxLength={421}
                onChange={(e) => handleOnDataChange(props, 'IdeaDescription', e.target.value)}
            />
        </>
    );
};

export default IdeaForm;
