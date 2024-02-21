export interface FormProps {
    data: PersonalProps;
    onDataChange: (key: keyof PersonalProps, value: string | undefined) => void;
}

export const handleOnDataChange = (props: FormProps, key: keyof PersonalProps, value: string | undefined) => {
    props.onDataChange(key, value);
};