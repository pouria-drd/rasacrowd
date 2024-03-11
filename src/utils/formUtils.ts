// Personal ----------------------------------------------------------------------
export interface PersonalFormProps {
    data: PersonalProps;
    onDataChange: (key: keyof PersonalProps, value: string | undefined) => void;
}

export const handleOnPersonalDataChange = (
    props: PersonalFormProps,
    key: keyof PersonalProps,
    value: string | undefined
) => {
    props.onDataChange(key, value);
};

// Team ----------------------------------------------------------------------

export interface TeamFormProps {
    data: TeamProps;
    onDataChange: (key: keyof TeamProps, value: string | undefined) => void;
}

export const handleOnTeamDataChange = (
    props: TeamFormProps,
    key: keyof TeamProps,
    value: string | undefined
) => {
    props.onDataChange(key, value);
};

// Service ----------------------------------------------------------------------

export interface ServiceFormProps {
    data: ServiceProps;
    onDataChange: (key: keyof ServiceProps, value: string | undefined) => void;
}

export const handleOnServiceDataChange = (
    props: ServiceFormProps,
    key: keyof ServiceProps,
    value: string | undefined
) => {
    props.onDataChange(key, value);
};

// Organization ----------------------------------------------------------------------

export interface OrganizationFormProps {
    data: OrganizationProps;
    onDataChange: (
        key: keyof OrganizationProps,
        value: string | undefined
    ) => void;
}

export const handleOnOrganizationDataChange = (
    props: OrganizationFormProps,
    key: keyof OrganizationProps,
    value: string | undefined
) => {
    props.onDataChange(key, value);
};
