import Input from "@/app/components/inputs/Input";
import SectionTitle from "../../components/SectionTitle";
import { handleOnTeamDataChange, TeamFormProps } from "../../../utils/formUtils";

const StockForm = (props: TeamFormProps) => {
    return (
        <>
            <SectionTitle title="سرمایه موردنیاز" />

            <Input placeHolder="میزان سرمایه اولیه شما"
                defaultValue={props.data.DoneInvest}
                onChange={(e) => handleOnTeamDataChange(props, 'DoneInvest', e.target.value)} />

            <Input placeHolder="میزان سرمایه درخواستی از سرمایه گذار"
                defaultValue={props.data.RequestedInvest}
                onChange={(e) => handleOnTeamDataChange(props, 'RequestedInvest', e.target.value)} />
        </>
    )
}

export default StockForm