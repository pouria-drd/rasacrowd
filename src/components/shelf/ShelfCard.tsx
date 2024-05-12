interface ShelfCardProps {
    tag: string;
    title: string;
    imgSrc: string;
    caption: string;
}

const ShelfCard = (shelfCardProps: ShelfCardProps) => {
    return (
        <div
            className="bg-rasa-gray-800 overflow-hidden
            flex flex-col items-end justify-center gap-4
            rounded-lg p-4">
            <img
                className="rounded-lg w-full"
                src={shelfCardProps.imgSrc}
                alt="IMG"
                loading="lazy"
            />
            <div className="bg-rasa-green-500 text-rasa-green-700 text-xs rounded-md w-fit px-2 py-1">
                <p>{shelfCardProps.tag}</p>
            </div>

            <div className="text-right flex flex-col items-center justify-center gap-1 w-full">
                <h4 className="font-semibold w-full">{shelfCardProps.title}</h4>
                <LimitedText text={shelfCardProps.caption} maxLength={120} />
            </div>
        </div>
    );
};

export default ShelfCard;

interface LimitedTextProps {
    text: string;
    maxLength: number;
}

const LimitedText = (limitedTextProps: LimitedTextProps) => {
    const limitedText =
        limitedTextProps.text.length > limitedTextProps.maxLength
            ? limitedTextProps.text.slice(0, limitedTextProps.maxLength) + "..."
            : limitedTextProps.text;

    return (
        <p className="text-rasa-gray-900 text-sm text-justify r2l">
            {limitedText}
        </p>
    );
};
