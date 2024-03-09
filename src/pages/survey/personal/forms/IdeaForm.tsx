import SectionTitle from "../../../../components/SectionTitle";
import Input from "../../../../components/custom-ui/input/Input";
import TextArea from "../../../../components/custom-ui/input/TextArea";
import { handleOnPersonalDataChange, PersonalFormProps } from "../../../../utils/formUtils";

const IdeaForm = (props: PersonalFormProps) => {
    return (
        <>
            <SectionTitle title="شرح ایده" />

            <Input
                placeHolder="عنوان ایده"
                defaultValue={props.data.ideaTitle}
                onChange={(e) => handleOnPersonalDataChange(props, 'ideaTitle', e.target.value)}
            />

            <TextArea
                placeHolder="خلاصه ایده"
                defaultValue={props.data.ideaDescription}
                maxLength={421}
                onChange={(e) => handleOnPersonalDataChange(props, 'ideaDescription', e.target.value)}
            />
        </>
    );
};

export default IdeaForm;
