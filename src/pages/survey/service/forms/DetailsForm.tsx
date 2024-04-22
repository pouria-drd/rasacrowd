import SectionTitle from '../../../../components/SectionTitle';
import Dropdown from '../../../../components/custom-ui/dropdown/Dropdown';

import TextArea from '../../../../components/custom-ui/input/TextArea';

import { ServiceFormProps, handleOnServiceDataChange } from '../../../../utils/formUtils';

function DetailsForm(props: ServiceFormProps) {
    const categoryOptions: OptionProps[] = [
        { label: 'مدیریت زنجیره ارزش', value: 'مدیریت زنجیره ارزش' },
        { label: 'بازاریابی و فروش', value: 'بازاریابی و فروش' },
        { label: 'فناوری اطلاعات و زیرساخت', value: 'فناوری اطلاعات و زیرساخت' },
        { label: 'حقوقی، مالی و حسابداری', value: 'حقوقی، مالی و حسابداری' },
        { label: 'سایر کسب و کارهای خدمت رسان', value: 'سایر کسب و کارهای خدمت رسان' },
    ];

    const activeYears: OptionProps[] = [
        { label: 'بیش از ده سال', value: 'بیش از ده سال' },
        { label: 'پنج تا ده سال', value: 'پنج تا ده سال' },
        { label: 'دو تا پنج سال', value: 'دو تا پنج سال' },
        { label: 'کمتر از دو سال', value: 'کمتر از دو سال' },
    ];

    const serviceType: OptionProps[] = [
        { label: 'حضوری', value: 'حضوری' },
        { label: 'مجازی', value: 'مجازی' },
        { label: 'هردو', value: 'هردو' },
    ];

    return (
        <>
            <SectionTitle title="جزئیات خدمات" />

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
            <Dropdown
                title="نوع فعالیت"
                options={serviceType}
                defaultValue={props.data.serviceType}
                onSelectOption={(e) => handleOnServiceDataChange(props, 'serviceType', e.label)}
            />

            <Dropdown
                title="مدت فعالیت"
                options={activeYears}
                defaultValue={props.data.activeYears}
                onSelectOption={(e) => handleOnServiceDataChange(props, 'activeYears', e.label)}
            />
        </>
    );
}

export default DetailsForm;
