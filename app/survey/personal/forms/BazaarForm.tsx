import TextArea from "@/app/components/inputs/TextArea";
import SectionTitle from "../../components/SectionTitle";
import { PersonalFormProps, handleOnPersonalDataChange } from "../../../utils/formUtils";

const BazaarForm = (props: PersonalFormProps) => {
    return (
        <>
            <SectionTitle title="تحلیل بازار" />

            <TextArea placeHolder="مزایای رقابتی محصول"
                defaultValue={props.data.MarketPoints}
                onChange={(e) => handleOnPersonalDataChange(props, 'MarketPoints', e.target.value)} />

            <TextArea placeHolder="بازار هدف (مشتریان)"
                defaultValue={props.data.MarketTarget}
                onChange={(e) => handleOnPersonalDataChange(props, 'MarketTarget', e.target.value)} />

            <TextArea placeHolder="رقبای کلیدی داخلی و خارجی"
                defaultValue={props.data.MarketRivals}
                onChange={(e) => handleOnPersonalDataChange(props, 'MarketRivals', e.target.value)} />
        </>
    )
}

export default BazaarForm
