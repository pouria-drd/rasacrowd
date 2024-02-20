interface BadgeProps {
    badgeColor?: 'green' | 'blue' | 'orange';
}

const Badge = (props: BadgeProps) => {
    const { badgeColor = 'blue' } = props;

    const cardLineColors = {
        'green': "bg-rasa-green-800",
        'blue': "bg-rasa-blue-300",
        'orange': "bg-rasa-orange-800",
    }

    return (
        <span className={`${cardLineColors[badgeColor]} w-1 h-9`}>
        </span>
    )
}

export default Badge