import SectionTitle from "../../../../components/SectionTitle";
import Input from "../../../../components/custom-ui/input/Input";
import { OrganizationFormProps, handleOnOrganizationDataChange } from "../../../../utils/formUtils";

const InformationForm = (props: OrganizationFormProps) => {
    return (
        <>
            <SectionTitle title="مشخصات اداره" />

            <Input placeHolder="کد یکتا"
                defaultValue={props.data.yektaCode}
                onChange={(e) =>
                    handleOnOrganizationDataChange(props, 'yektaCode', e.target.value)} />

            <Input placeHolder="نام اداره"
                defaultValue={props.data.officeName}
                onChange={(e) =>
                    handleOnOrganizationDataChange(props, 'officeName', e.target.value)} />

            <Input placeHolder="ریاست اداره"
                defaultValue={props.data.officeBoss}
                onChange={(e) =>
                    handleOnOrganizationDataChange(props, 'officeBoss', e.target.value)} />

            <Input placeHolder="شماره همراه مسئول پیگیری" maxLength={11}
                defaultValue={props.data.agentPhoneNumber}
                onChange={(e) =>
                    handleOnOrganizationDataChange(props, 'agentPhoneNumber', e.target.value)} />
        </>
    )
}

export default InformationForm
