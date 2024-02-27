import Input from "@/app/components/inputs/Input";
import SectionTitle from "../../components/SectionTitle";
import { TeamFormProps, handleOnTeamDataChange } from "../../../utils/formUtils";

const PersonalForm = (props: TeamFormProps) => {
    return (
        <>
            <SectionTitle title="مشخصات کلی" />

            <Input placeHolder="نام شرکت یا کارگاه اقتصادی"
                defaultValue={props.data.JobTitle}
                onChange={(e) => handleOnTeamDataChange(props, 'JobTitle', e.target.value)} />

            <Input placeHolder="نام و نام خانوادگی مسئول پیگیری"
                defaultValue={props.data.AgentFullName}
                onChange={(e) => handleOnTeamDataChange(props, 'AgentFullName', e.target.value)} />

            <Input placeHolder="شماره همراه" maxLength={11}
                defaultValue={props.data.AgentPhoneNumber}
                onChange={(e) => handleOnTeamDataChange(props, 'AgentPhoneNumber', e.target.value)} />

            <Input placeHolder="ایمیل (اختیاری)"
                defaultValue={props.data.Email}
                onChange={(e) => handleOnTeamDataChange(props, 'Email', e.target.value)}
            />
        </>
    )
}

export default PersonalForm