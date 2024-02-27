import React from "react";
import Input from "@/app/components/inputs/Input";
import TextArea from "@/app/components/inputs/TextArea";
import SectionTitle from "../../components/SectionTitle";
import { handleOnPersonalDataChange, PersonalFormProps } from "../../../utils/formUtils";

const IdeaForm = (props: PersonalFormProps) => {
    return (
        <>
            <SectionTitle title="شرح ایده" />

            <Input
                placeHolder="عنوان ایده"
                defaultValue={props.data.IdeaTitle}
                onChange={(e) => handleOnPersonalDataChange(props, 'IdeaTitle', e.target.value)}
            />

            <TextArea
                placeHolder="خلاصه ایده"
                defaultValue={props.data.IdeaDescription}
                maxLength={421}
                onChange={(e) => handleOnPersonalDataChange(props, 'IdeaDescription', e.target.value)}
            />
        </>
    );
};

export default IdeaForm;
