import Input from "@/app/components/inputs/Input";
import SectionTitle from "../../components/SectionTitle";
import { TeamFormProps, handleOnTeamDataChange } from "../../../utils/formUtils";

const InformationForm = (props: TeamFormProps) => {
    return (
        <>
            <SectionTitle title="مشخصات کلی" />

            <Input placeHolder="نام شرکت یا کارگاه اقتصادی"
                defaultValue={props.data.jobTitle}
                onChange={(e) => handleOnTeamDataChange(props, 'jobTitle', e.target.value)} />

            <Input placeHolder="نام و نام خانوادگی مسئول پیگیری"
                defaultValue={props.data.agentFullName}
                onChange={(e) => handleOnTeamDataChange(props, 'agentFullName', e.target.value)} />

            <Input placeHolder="شماره همراه" maxLength={11}
                defaultValue={props.data.agentPhoneNumber}
                onChange={(e) => handleOnTeamDataChange(props, 'agentPhoneNumber', e.target.value)} />

            <Input placeHolder="ایمیل (اختیاری)"
                defaultValue={props.data.email}
                onChange={(e) => handleOnTeamDataChange(props, 'email', e.target.value)}
            />
        </>
    )
}

export default InformationForm