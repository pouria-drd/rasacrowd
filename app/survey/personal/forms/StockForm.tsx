import Input from "@/app/components/inputs/Input";
import SectionTitle from "../../components/SectionTitle";
import { handleOnPersonalDataChange, PersonalFormProps } from "../../../utils/formUtils";

const StockForm = (props: PersonalFormProps) => {
    return (
        <>
            <SectionTitle title="سرمایه موردنیاز" />

            <Input placeHolder="میزان سرمایه اولیه شما"
                defaultValue={props.data.DoneInvest}
                onChange={(e) => handleOnPersonalDataChange(props, 'DoneInvest', e.target.value)} />

            <Input placeHolder="میزان سرمایه درخواستی از سرمایه گذار"
                defaultValue={props.data.RequestedInvest}
                onChange={(e) => handleOnPersonalDataChange(props, 'RequestedInvest', e.target.value)} />
        </>
    )
}

export default StockForm