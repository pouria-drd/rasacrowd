import TextArea from "@/app/components/inputs/TextArea";
import SectionTitle from "../../components/SectionTitle";
import { PersonalFormProps, handleOnPersonalDataChange } from "../../../utils/formUtils";

const BazaarForm = (props: PersonalFormProps) => {
    return (
        <>
            <SectionTitle title="تحلیل بازار" />

            <TextArea placeHolder="مزایای رقابتی محصول"
                defaultValue={props.data.marketPoints}
                onChange={(e) => handleOnPersonalDataChange(props, 'marketPoints', e.target.value)} />

            <TextArea placeHolder="بازار هدف (مشتریان)"
                defaultValue={props.data.marketTarget}
                onChange={(e) => handleOnPersonalDataChange(props, 'marketTarget', e.target.value)} />

            <TextArea placeHolder="رقبای کلیدی داخلی و خارجی"
                defaultValue={props.data.marketRivals}
                onChange={(e) => handleOnPersonalDataChange(props, 'marketRivals', e.target.value)} />
        </>
    )
}

export default BazaarForm
