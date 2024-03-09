import Input from "../../../../components/custom-ui/input/Input";
import SectionTitle from "../../../../components/SectionTitle";
import { handleOnTeamDataChange, TeamFormProps } from "../../../../utils/formUtils";

const StockForm = (props: TeamFormProps) => {
    return (
        <>
            <SectionTitle title="سرمایه موردنیاز" />

            <Input placeHolder="میزان سرمایه اولیه شما"
                defaultValue={props.data.doneInvest}
                onChange={(e) => handleOnTeamDataChange(props, 'doneInvest', e.target.value)} />

            <Input placeHolder="میزان سرمایه درخواستی از سرمایه گذار"
                defaultValue={props.data.requestedInvest}
                onChange={(e) => handleOnTeamDataChange(props, 'requestedInvest', e.target.value)} />
        </>
    )
}

export default StockForm