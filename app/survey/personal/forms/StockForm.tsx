import Input from "@/app/components/inputs/Input";
import SectionTitle from "../../components/SectionTitle";
import { handleOnDataChange, FormProps } from "../utils/formUtils";

const StockForm = (props: FormProps) => {
    return (
        <>
            <SectionTitle title="سرمایه موردنیاز" />

            <Input placeHolder="میزان سرمایه اولیه شما"
                defaultValue={props.data.DoneInvest}
                onChange={(e) => handleOnDataChange(props, 'DoneInvest', e.target.value)} />

            <Input placeHolder="میزان سرمایه درخواستی از سرمایه گذار"
                defaultValue={props.data.RequestedInvest}
                onChange={(e) => handleOnDataChange(props, 'RequestedInvest', e.target.value)} />
        </>
    )
}

export default StockForm