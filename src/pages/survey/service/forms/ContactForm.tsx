import SectionTitle from '../../../../components/SectionTitle';
import Input from '../../../../components/custom-ui/input/Input';
import { ServiceFormProps, handleOnServiceDataChange } from '../../../../utils/formUtils';

function ContactForm(props: ServiceFormProps) {
    return (
        <>
            <SectionTitle title="راه های ارتباطی" />

            <Input
                placeHolder="شماره همراه"
                maxLength={11}
                defaultValue={props.data.agentPhoneNumber}
                onChange={(e) => handleOnServiceDataChange(props, 'agentPhoneNumber', e.target.value)}
            />

            <Input
                placeHolder="نشانی"
                defaultValue={props.data.address}
                onChange={(e) => handleOnServiceDataChange(props, 'address', e.target.value)}
            />

            <Input
                placeHolder="نشانی اینترنتی (اختیاری)"
                maxLength={40}
                defaultValue={props.data.site}
                onChange={(e) => handleOnServiceDataChange(props, 'site', e.target.value)}
            />

            <Input
                placeHolder="ایمیل (اختیاری)"
                defaultValue={props.data.email}
                onChange={(e) => handleOnServiceDataChange(props, 'email', e.target.value)}
            />
        </>
    );
}

export default ContactForm;
