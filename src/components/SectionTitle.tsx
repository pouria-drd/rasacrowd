import Badge from "./Badge";

interface SectionTitleProps {
    title: string;
    badgeColor?: 'green' | 'blue' | 'orange';
}

const SectionTitle = (props: SectionTitleProps) => {
    const { badgeColor = 'blue' } = props;

    return (
        <>
            <div
                className="cursor-default
                flex items-center justify-end gap-2">

                <h2 className="text-rasa-blue-800 text-lg sm:text-xl">
                    {props.title}
                </h2>

                <Badge badgeColor={badgeColor} />
            </div>
        </>
    )
}

export default SectionTitle