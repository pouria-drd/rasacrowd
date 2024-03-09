import SectionTitle from "../../../../components/SectionTitle";
import OptionsSelector from "../../../../components/OptionsSelector";
import { handleOnPersonalDataChange, PersonalFormProps } from "../../../../utils/formUtils";

const ProduceFrom = (props: PersonalFormProps) => {
    const options = [
        "تحقیقات اولیه",
        "تولید نمونه اولیه و کسب مجوزات",
        "تست مارکتینگ و بازاریابی آزمایشی",
        "تولید در مقیاس کوچک تجاری و کسب درآمد",
        "تولید صنعتی و کسب سود",
        "گسترش و توسعه محصولات جانبی و مکمل",
    ]

    return (
        <>
            <SectionTitle title="مراحل تولید" />

            <OptionsSelector default={props.data.productPhase}
                onChange={(v) => handleOnPersonalDataChange(props, 'productPhase', v)}
                title="کسب و کار شما در کدام یک از مراحل زیر است؟" options={options} />
        </>
    )
}

export default ProduceFrom