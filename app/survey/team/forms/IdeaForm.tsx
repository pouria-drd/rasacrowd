import React from "react";
import Input from "@/app/components/inputs/Input";
import TextArea from "@/app/components/inputs/TextArea";
import SectionTitle from "../../components/SectionTitle";
import { handleOnTeamDataChange, TeamFormProps } from "../../../utils/formUtils";

const IdeaForm = (props: TeamFormProps) => {
    return (
        <>
            <SectionTitle title="شرح ایده" />

            <Input
                placeHolder="عنوان طرح"
                defaultValue={props.data.ideaTitle}
                onChange={(e) => handleOnTeamDataChange(props, 'ideaTitle', e.target.value)}
            />

            <TextArea
                placeHolder="خلاصه طرح"
                defaultValue={props.data.ideaDescription}
                maxLength={421}
                onChange={(e) => handleOnTeamDataChange(props, 'ideaDescription', e.target.value)}
            />
        </>
    );
};

export default IdeaForm;
