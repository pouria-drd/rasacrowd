import Input from "../../../../components/custom-ui/input/Input";
import TextArea from "../../../../components/custom-ui/input/TextArea";
import SectionTitle from "../../../../components/SectionTitle";
import { OrganizationFormProps, handleOnOrganizationDataChange } from "../../../../utils/formUtils";

const ProjectForm = (props: OrganizationFormProps) => {
    return (
        <>
            <SectionTitle title="شرح طرح" />

            <Input placeHolder="عنوان فرصت سرمایه گذاری"
                defaultValue={props.data.ideaTitle}
                onChange={(e) =>
                    handleOnOrganizationDataChange(props, 'ideaTitle', e.target.value)} />


            <TextArea
                placeHolder="خلاصه طرح"
                defaultValue={props.data.ideaDescription}
                maxLength={421}
                onChange={(e) => handleOnOrganizationDataChange(props, 'ideaDescription', e.target.value)}
            />
        </>
    )
}

export default ProjectForm
