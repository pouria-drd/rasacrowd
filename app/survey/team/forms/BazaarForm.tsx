import TextArea from "@/app/components/inputs/TextArea";
import SectionTitle from "../../components/SectionTitle";
import { TeamFormProps, handleOnTeamDataChange } from "../../../utils/formUtils";

const BazaarForm = (props: TeamFormProps) => {
    return (
        <>
            <SectionTitle title="تحلیل بازار" />

            <TextArea placeHolder="مزایای رقابتی محصول"
                defaultValue={props.data.marketPoints}
                onChange={(e) => handleOnTeamDataChange(props, 'marketPoints', e.target.value)} />

            <TextArea placeHolder="بازار هدف (مشتریان)"
                defaultValue={props.data.marketTarget}
                onChange={(e) => handleOnTeamDataChange(props, 'marketTarget', e.target.value)} />

            <TextArea placeHolder="رقبای کلیدی داخلی و خارجی"
                defaultValue={props.data.marketRivals}
                onChange={(e) => handleOnTeamDataChange(props, 'marketRivals', e.target.value)} />
        </>
    )
}

export default BazaarForm
