import TextArea from "@/app/components/inputs/TextArea";
import SectionTitle from "../../components/SectionTitle";
import { OrganizationFormProps, handleOnOrganizationDataChange } from "../../../utils/formUtils";

const ProfitForm = (props: OrganizationFormProps) => {
    return (
        <>
            <SectionTitle title="اهداف اجرا بر اساس ذی نفعان" />

            <TextArea placeHolder="سازمان"
                defaultValue={props.data.selfProfit}
                onChange={(e) =>
                    handleOnOrganizationDataChange(props, 'selfProfit', e.target.value)} />

            <TextArea placeHolder="سرمایه گذار"
                defaultValue={props.data.investProfit}
                onChange={(e) =>
                    handleOnOrganizationDataChange(props, 'investProfit', e.target.value)} />


            <TextArea placeHolder="عموم مردم"
                defaultValue={props.data.publicProfit}
                onChange={(e) =>
                    handleOnOrganizationDataChange(props, 'publicProfit', e.target.value)} />
        </>
    )
}

export default ProfitForm
