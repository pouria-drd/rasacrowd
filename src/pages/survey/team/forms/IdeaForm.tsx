import SectionTitle from "../../../../components/SectionTitle";
import Input from "../../../../components/custom-ui/input/Input";
import TextArea from "../../../../components/custom-ui/input/TextArea";
import { handleOnTeamDataChange, TeamFormProps } from "../../../../utils/formUtils";

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
