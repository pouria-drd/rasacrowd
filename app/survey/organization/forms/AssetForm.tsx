import Input from "@/app/components/inputs/Input";
import SectionTitle from "../../components/SectionTitle";
import { OrganizationFormProps, handleOnOrganizationDataChange } from "../../../utils/formUtils";

const AssetForm = (props: OrganizationFormProps) => {
    return (
        <>
            <SectionTitle title="سرمایه" />

            <Input placeHolder="میزان سرمایه شما"
                defaultValue={props.data.DoneInvest}
                onChange={(e) =>
                    handleOnOrganizationDataChange(props, 'DoneInvest', e.target.value)} />

            <Input placeHolder="میزان سرمایه درخواستی از سرمایه گذار"
                defaultValue={props.data.RequestedInvest}
                onChange={(e) =>
                    handleOnOrganizationDataChange(props, 'RequestedInvest', e.target.value)} />
        </>
    )
}

export default AssetForm
