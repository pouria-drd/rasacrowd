export interface PersonalFormProps {
    data: PersonalProps;
    onDataChange: (key: keyof PersonalProps, value: string | undefined) => void;
}

export const handleOnPersonalDataChange = (props: PersonalFormProps, key: keyof PersonalProps, value: string | undefined) => {
    props.onDataChange(key, value);
};

export interface TeamFormProps {
    data: TeamProps;
    onDataChange: (key: keyof TeamProps, value: string | undefined) => void;
}

export const handleOnTeamDataChange = (props: TeamFormProps, key: keyof TeamProps, value: string | undefined) => {
    props.onDataChange(key, value);
};