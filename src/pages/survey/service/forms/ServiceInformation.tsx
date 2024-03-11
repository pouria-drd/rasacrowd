import SectionTitle from '../../../../components/SectionTitle';
import Input from '../../../../components/custom-ui/input/Input';
import TextArea from '../../../../components/custom-ui/input/TextArea';
import Dropdown from '../../../../components/custom-ui/dropdown/Dropdown';
import { ServiceFormProps, handleOnServiceDataChange } from '../../../../utils/formUtils';

function ServiceInformation(props: ServiceFormProps) {
    const categoryOptions: OptionProps[] = [
        { label: 'طراحی و دیزاین', value: 'طراحی و دیزاین' },
        { label: 'حسابداری و حسابرسی', value: 'حسابداری و حسابرسی' },
        { label: 'سایت و نرم افزار', value: 'سایت و نرم افزار' },
        { label: 'سایر', value: 'سایر' },
    ];

    return (
        <>
            <SectionTitle title="اطلاعات کلی" />

            <Input
                placeHolder="عنوان کسب و کار خدماتی "
                defaultValue={props.data.serviceTitle}
                onChange={(e) => handleOnServiceDataChange(props, 'serviceTitle', e.target.value)}
            />

            <Dropdown
                title="نوع خدمت"
                options={categoryOptions}
                defaultValue={props.data.category}
                onSelectOption={(e) => handleOnServiceDataChange(props, 'category', e.label)}
            />

            <TextArea
                placeHolder="شرح خدمت"
                defaultValue={props.data.description}
                onChange={(e) => handleOnServiceDataChange(props, 'description', e.target.value)}
            />
        </>
    );
}

export default ServiceInformation;
