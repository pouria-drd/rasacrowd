import SectionTitle from '../../../../components/SectionTitle';
import Input from '../../../../components/custom-ui/input/Input';

import { ServiceFormProps, handleOnServiceDataChange } from '../../../../utils/formUtils';

function ServiceInformation(props: ServiceFormProps) {
    return (
        <>
            <SectionTitle title="اطلاعات کسب و کار" />

            <Input
                placeHolder="عنوان شرکت / خدمات دهنده "
                defaultValue={props.data.serviceTitle}
                onChange={(e) => handleOnServiceDataChange(props, 'serviceTitle', e.target.value)}
            />

            <Input
                placeHolder="نام و نام خانوادگی مدیریت"
                defaultValue={props.data.serviceManager}
                onChange={(e) => handleOnServiceDataChange(props, 'serviceManager', e.target.value)}
            />
        </>
    );
}

export default ServiceInformation;
