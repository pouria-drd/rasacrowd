import Input from "@/app/components/inputs/Input";
import SectionTitle from "../../components/SectionTitle";
import { Dropdown } from "@/app/components/dropdowns/Dropdown";

const PersonalInformationForm = () => {
    const ageOptions: OptionProps[] = [
        { label: 'زیر 20 سال', value: 'زیر 20 سال' },
        { label: '20 تا 25سال', value: '20 تا 25سال' },
        { label: '25 تا 30 سال', value: '25 تا 30 سال' },
        { label: '30 تا 45 سال', value: '30 تا 45 سال' },
        { label: '45 تا 50 سال', value: '45 تا 50 سال' },
        { label: 'بالای 50 سال', value: 'بالای 50 سال' },
    ]

    const eduOptions: OptionProps[] = [
        { label: 'زیر دیپلم', value: 'زیر دیپلم' },
        { label: 'دیپلم', value: 'دیپلم' },
        { label: 'فوق دیپلم', value: 'فوق دیپلم' },
        { label: 'لیسانس', value: 'لیسانس' },
        { label: 'فوق لیسانس', value: 'فوق لیسانس' },
        { label: 'دکترا', value: 'دکترا' },
    ]

    return (
        <>
            <SectionTitle title="مشخصات فردی" />

            <Input placeHolder="نام و نام خانوادگی" />

            <Dropdown title="بازه سنی" options={ageOptions} />

            <Dropdown title="مدرک تحصیلی" options={eduOptions} />

            <Input placeHolder="شماره همراه" maxLength={11} />

            <Input placeHolder="ایمیل (اختیاری)" />
        </>
    )
}

export default PersonalInformationForm