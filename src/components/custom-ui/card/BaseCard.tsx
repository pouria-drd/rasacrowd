import { ReactNode } from "react"

interface BaseCardProps {
    children?: ReactNode;
    className?: string;
}

const BaseCard = (props: BaseCardProps) => {
    return (
        <div className={`cursor-default
        flex flex-col items-center justify-start gap-10 
        pt-28 pb-8 w-full h-full ${props.className}`}>

            {props.children}

        </div>
    )
}

export default BaseCard
