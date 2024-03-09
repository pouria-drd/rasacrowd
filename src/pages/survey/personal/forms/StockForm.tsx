import SectionTitle from "../../../../components/SectionTitle";
import Input from "../../../../components/custom-ui/input/Input";
import { handleOnPersonalDataChange, PersonalFormProps } from "../../../../utils/formUtils";

const StockForm = (props: PersonalFormProps) => {
    return (
        <>
            <SectionTitle title="سرمایه موردنیاز" />

            <Input placeHolder="میزان سرمایه اولیه شما"
                defaultValue={props.data.doneInvest}
                onChange={(e) => handleOnPersonalDataChange(props, 'doneInvest', e.target.value)} />

            <Input placeHolder="میزان سرمایه درخواستی از سرمایه گذار"
                defaultValue={props.data.requestedInvest}
                onChange={(e) => handleOnPersonalDataChange(props, 'requestedInvest', e.target.value)} />
        </>
    )
}

export default StockForm