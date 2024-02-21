import TextArea from "@/app/components/inputs/TextArea"
import SectionTitle from "../../components/SectionTitle"

const BazaarForm = () => {
    return (
        <>
            <SectionTitle title="تحلیل بازار" />

            <TextArea placeHolder="مزایای رقابتی محصول" />
            <TextArea placeHolder="بازار هدف (مشتریان)" />
            <TextArea placeHolder="رقبای کلیدی داخلی و خارجی" />
        </>
    )
}

export default BazaarForm
