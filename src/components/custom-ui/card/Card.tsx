import { ReactNode } from "react"

interface CardProps {
    children: ReactNode;
    className?: string;
}

const Card = (props: CardProps) => {
    return (
        <div
            className={`cursor-default
            text-joyhub-card-text-light dark:text-joyhub-card-text-dark
            bg-joyhub-card-bg-light dark:bg-joyhub-card-bg-dark
            rounded-lg w-full sm:w-96 p-4 ${props.className}`}>
            {
                props.children
            }
        </div>
    )
}

export default Card
