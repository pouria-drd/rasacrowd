import TextArea from "@/app/components/inputs/TextArea";
import SectionTitle from "../../components/SectionTitle";
import { FormProps, handleOnDataChange } from "../../utils/formUtils";

const BazaarForm = (props: FormProps) => {
    return (
        <>
            <SectionTitle title="تحلیل بازار" />

            <TextArea placeHolder="مزایای رقابتی محصول"
                defaultValue={props.data.MarketPoints}
                onChange={(e) => handleOnDataChange(props, 'MarketPoints', e.target.value)} />

            <TextArea placeHolder="بازار هدف (مشتریان)"
                defaultValue={props.data.MarketTarget}
                onChange={(e) => handleOnDataChange(props, 'MarketTarget', e.target.value)} />

            <TextArea placeHolder="رقبای کلیدی داخلی و خارجی"
                defaultValue={props.data.MarketRivals}
                onChange={(e) => handleOnDataChange(props, 'MarketRivals', e.target.value)} />
        </>
    )
}

export default BazaarForm
