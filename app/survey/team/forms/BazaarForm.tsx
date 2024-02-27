import TextArea from "@/app/components/inputs/TextArea";
import SectionTitle from "../../components/SectionTitle";
import { TeamFormProps, handleOnTeamDataChange } from "../../../utils/formUtils";

const BazaarForm = (props: TeamFormProps) => {
    return (
        <>
            <SectionTitle title="تحلیل بازار" />

            <TextArea placeHolder="مزایای رقابتی محصول"
                defaultValue={props.data.MarketPoints}
                onChange={(e) => handleOnTeamDataChange(props, 'MarketPoints', e.target.value)} />

            <TextArea placeHolder="بازار هدف (مشتریان)"
                defaultValue={props.data.MarketTarget}
                onChange={(e) => handleOnTeamDataChange(props, 'MarketTarget', e.target.value)} />

            <TextArea placeHolder="رقبای کلیدی داخلی و خارجی"
                defaultValue={props.data.MarketRivals}
                onChange={(e) => handleOnTeamDataChange(props, 'MarketRivals', e.target.value)} />
        </>
    )
}

export default BazaarForm
