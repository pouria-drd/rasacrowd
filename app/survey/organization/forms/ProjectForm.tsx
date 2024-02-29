import Input from "@/app/components/inputs/Input";
import TextArea from "@/app/components/inputs/TextArea";
import SectionTitle from "../../components/SectionTitle";
import { OrganizationFormProps, handleOnOrganizationDataChange } from "../../../utils/formUtils";

const ProjectForm = (props: OrganizationFormProps) => {
    return (
        <>
            <SectionTitle title="شرح طرح" />

            <Input placeHolder="عنوان فرصت سرمایه گذاری"
                defaultValue={props.data.IdeaTitle}
                onChange={(e) =>
                    handleOnOrganizationDataChange(props, 'IdeaTitle', e.target.value)} />


            <TextArea
                placeHolder="خلاصه طرح"
                defaultValue={props.data.IdeaDescription}
                maxLength={421}
                onChange={(e) => handleOnOrganizationDataChange(props, 'IdeaDescription', e.target.value)}
            />
        </>
    )
}

export default ProjectForm
